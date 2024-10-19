'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageCircle, Send, X } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }])
      setInputMessage('')
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! How can I assist you today?", sender: 'bot' }])
      }, 1000)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 h-96 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between p-4">
            <h3 className="font-semibold">Chat with us</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-grow overflow-auto p-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <form onSubmit={sendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button onClick={toggleChat} size="icon" className="rounded-full h-12 w-12">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}