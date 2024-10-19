'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Send, X, Trash2, Bot, ChevronUp, ChevronDown } from 'lucide-react'

async function query(data) {
  const response = await fetch(
    "http://localhost:3000/api/v1/prediction/ac249b08-f4ed-40d0-a493-94bba72a8d20",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
  );
  const result = await response.json();
  return result;
}

export default function ChatWidget() {
  const initialMessage = { text: "Welcome! I'm an AI assistant. How can I help you today?", sender: 'bot' as const }
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([initialMessage])
  const [inputMessage, setInputMessage] = useState('')
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [sampleMessages] = useState([
    "What services do you offer?",
    "How can I contact support?",
    "Tell me about your pricing plans.",
    "Do you have any promotions?",
    "Can you explain your refund policy?",
    "How do I create an account?"
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setShowWelcomeMessage(false)
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() && !isLoading) {
      const userMessage = { text: inputMessage, sender: 'user' as const }
      setMessages(prev => [...prev, userMessage])
      setInputMessage('')
      setIsLoading(true)

      try {
        const response = await query({ question: inputMessage })
        const botMessage = { text: response.text, sender: 'bot' as const }
        setMessages(prev => [...prev, botMessage])
      } catch (error) {
        console.error('Error fetching response:', error)
        const errorMessage = { text: "Sorry, I'm having trouble responding right now. Please try again later.", sender: 'bot' as const }
        setMessages(prev => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleSampleMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, sender: 'user' }])
    setShowSuggestions(false)
    setIsLoading(true)

    try {
      const response = await query({ question: message })
      const botMessage = { text: response.text, sender: 'bot' as const }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error fetching response:', error)
      const errorMessage = { text: "Sorry, I'm having trouble responding right now. Please try again later.", sender: 'bot' as const }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const clearMessages = () => {
    setMessages([initialMessage])
  }

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions)
  }

  return (
    <div className="fixed bottom-0 right-0 left-0 sm:bottom-8 sm:right-8 sm:left-auto z-50">
      {isOpen ? (
        <Card className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[90vh] sm:h-[800px] flex flex-col shadow-lg rounded-none sm:rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-purple-600 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-600">
                <Bot size={20} />
              </div>
              <h3 className="text-lg font-semibold">AI Assistant</h3>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={clearMessages} className="text-white hover:bg-purple-700">
                <Trash2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-purple-700">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg text-sm">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          <div className="border-t">
            <Button
              onClick={toggleSuggestions}
              variant="ghost"
              className="w-full flex justify-between items-center py-2 px-4 text-sm text-gray-600"
            >
              Suggested questions
              {showSuggestions ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </Button>
            {showSuggestions && (
              <div className="p-4 space-y-2 bg-gray-50">
                {sampleMessages.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSampleMessage(message)}
                    className="w-full text-xs justify-start h-auto py-2 px-3"
                    disabled={isLoading}
                  >
                    {message}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <CardFooter className="border-t p-4">
            <form onSubmit={sendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow text-sm"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="bg-purple-600 hover:bg-purple-700 h-10 w-10" disabled={isLoading}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <div className="relative flex flex-col items-end p-4">
          {showWelcomeMessage && (
            <div className="mb-2 p-3 bg-white rounded-lg shadow-lg text-sm whitespace-nowrap animate-fade-in-down">
              Hi there! 👋 Need any help? I'm here to assist you!
            </div>
          )}
          <Button 
            onClick={toggleChat} 
            size="icon" 
            className="rounded-full h-14 w-14 bg-purple-600 hover:bg-purple-700 shadow-lg animate-pulse"
          >
            <Bot size={24} className="text-white" />
          </Button>
        </div>
      )}
    </div>
  )
}