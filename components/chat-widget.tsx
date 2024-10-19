'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Send, X, Trash2, Bot, ChevronUp, ChevronDown, ChevronDownCircle, Moon, Sun, User } from 'lucide-react'
import { FlowiseClient } from 'flowise-sdk'
import { format } from 'date-fns'

const client = new FlowiseClient({ baseUrl: 'http://localhost:3000' });

export default function ChatWidget() {
  const initialMessage = { text: "Welcome! I'm an AI assistant. How can I help you today?", sender: 'bot' as const, timestamp: new Date() }
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot'; timestamp: Date }[]>([initialMessage])
  const [inputMessage, setInputMessage] = useState('')
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [sampleMessages] = useState([
    "What services do you offer?",
    "How can I contact support?",
    "Tell me about your pricing plans.",
    "Do you have any promotions?",
    "Can you explain your refund policy?",
    "How do I create an account?"
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContentRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleScroll = () => {
      if (chatContentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContentRef.current
        setShowScrollButton(scrollHeight - scrollTop > clientHeight + 100)
      }
    }

    chatContentRef.current?.addEventListener('scroll', handleScroll)
    return () => chatContentRef.current?.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setShowWelcomeMessage(false)
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() && !isLoading) {
      const userMessage = { text: inputMessage, sender: 'user' as const, timestamp: new Date() }
      setMessages(prev => [...prev, userMessage])
      setInputMessage('')
      setIsLoading(true)
      setIsTyping(true)

      try {
        const prediction = await client.createPrediction({
          chatflowId: 'ac249b08-f4ed-40d0-a493-94bba72a8d20',
          question: inputMessage,
          streaming: true,
        });

        let botResponse = '';
        for await (const chunk of prediction) {
          if (chunk.event === 'token') {
            botResponse += chunk.data;
            setMessages(prev => {
              const newMessages = [...prev];
              if (newMessages[newMessages.length - 1].sender === 'bot') {
                newMessages[newMessages.length - 1].text = botResponse;
              } else {
                newMessages.push({ text: botResponse, sender: 'bot', timestamp: new Date() });
              }
              return newMessages;
            });
          }
        }
      } catch (error) {
        console.error('Error fetching response:', error)
        const errorMessage = { text: "Sorry, I'm having trouble responding right now. Please try again later.", sender: 'bot' as const, timestamp: new Date() }
        setMessages(prev => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
        setIsTyping(false)
      }
    }
  }

  const handleSampleMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, sender: 'user', timestamp: new Date() }])
    setShowSuggestions(false)
    setIsLoading(true)
    setIsTyping(true)

    try {
      const prediction = await client.createPrediction({
        chatflowId: 'ac249b08-f4ed-40d0-a493-94bba72a8d20', // Replace with your actual chatflow ID
        question: message,
        streaming: true,
      });

      let botResponse = '';
      for await (const chunk of prediction) {
        if (chunk.event === 'token') {
          botResponse += chunk.data;
          setMessages(prev => {
            const newMessages = [...prev];
            if (newMessages[newMessages.length - 1].sender === 'bot') {
              newMessages[newMessages.length - 1].text = botResponse;
            } else {
              newMessages.push({ text: botResponse, sender: 'bot', timestamp: new Date() });
            }
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error('Error fetching response:', error)
      const errorMessage = { text: "Sorry, I'm having trouble responding right now. Please try again later.", sender: 'bot' as const, timestamp: new Date() }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setIsTyping(false)
    }
  }

  const clearMessages = () => {
    setMessages([initialMessage])
  }

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`fixed bottom-0 right-0 left-0 sm:bottom-8 sm:right-8 sm:left-auto z-50 ${isDarkMode ? 'dark' : ''}`}>
      {isOpen ? (
        <Card className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[90vh] sm:h-[800px] flex flex-col shadow-lg rounded-none sm:rounded-lg dark:bg-gray-800 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-800 dark:to-indigo-800 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-semibold">AI Assistant</h3>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-white hover:bg-purple-700 rounded-full">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={clearMessages} className="text-white hover:bg-purple-700 rounded-full">
                <Trash2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-purple-700 rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent ref={chatContentRef} className="flex-grow overflow-auto p-4 space-y-4 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-white'
                  }`}>
                    {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[70%] p-3 rounded-lg text-sm relative ${
                    msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-white text-gray-800 dark:bg-gray-600 dark:text-white'
                  }`}>
                    {msg.text}
                    <div className={`absolute bottom-1 ${msg.sender === 'user' ? 'right-[-8px]' : 'left-[-8px]'} w-3 h-3 transform rotate-45 ${
                      msg.sender === 'user' ? 'bg-purple-600' : 'bg-white dark:bg-gray-600'
                    }`}></div>
                    <div className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                      {format(msg.timestamp, 'HH:mm')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-white flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-lg text-sm">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          {showScrollButton && (
            <Button
              onClick={scrollToBottom}
              className="absolute bottom-20 right-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
              size="icon"
            >
              <ChevronDownCircle className="h-5 w-5" />
            </Button>
          )}
          <div className="border-t dark:border-gray-600">
            <Button
              onClick={toggleSuggestions}
              variant="ghost"
              className="w-full flex justify-between items-center py-2 px-4 text-sm text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700"
            >
              Suggested questions
              {showSuggestions ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </Button>
            {showSuggestions && (
              <div className="p-4 space-y-2 bg-gray-50 dark:bg-gray-700">
                {sampleMessages.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSampleMessage(message)}
                    className="w-full text-xs justify-start h-auto py-2 px-3 dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-purple-100 transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {message}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <CardFooter className="border-t p-4 dark:border-gray-600 bg-white dark:bg-gray-800">
            <form onSubmit={sendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow text-sm dark:bg-gray-700 dark:text-white rounded-full"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="bg-purple-600 hover:bg-purple-700 h-10 w-10 dark:bg-purple-800 dark:hover:bg-purple-900 rounded-full shadow-md" disabled={isLoading}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <div className="relative flex flex-col items-end p-4">
          {showWelcomeMessage && (
            <div className="mb-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-sm whitespace-nowrap animate-fade-in-down dark:text-white">
              Hi there! 👋 Need any help? I&apos;m here to assist you!
            </div>
          )}
          <Button 
            onClick={toggleChat} 
            size="icon" 
            className="rounded-full h-14 w-14 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg animate-pulse dark:from-purple-800 dark:to-indigo-800 dark:hover:from-purple-900 dark:hover:to-indigo-900"
          >
            <Bot size={24} className="text-white" />
          </Button>
        </div>
      )}
    </div>
  )
}

