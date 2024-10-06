import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Paperclip, Mic, CornerDownLeft, Bot, User } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatMessage {
  id: number
  sender: 'user' | 'bot'
  content: string
}

const initialMessages: ChatMessage[] = [
  { id: 1, sender: 'bot', content: "Hello! Upload a game to start reversing" },
  { id: 2, sender: 'user', content: "Uploaded Game.nes" },
  { id: 3, sender: 'bot', content: "Press Play to start logging events such as function calls" },
  { id: 4, sender: 'user', content: "Can you tell me more about the header section?" },
  { id: 5, sender: 'bot', content: "Of course! The NES ROM header is typically 16 bytes long and contains important information about the game. Here's a breakdown:\n\n1. Bytes 0-3: 'NES' followed by MS-DOS end-of-file (0x1A)\n2. Byte 4: Size of PRG ROM in 16 KB units\n3. Byte 5: Size of CHR ROM in 8 KB units\n4. Byte 6: Mapper, mirroring, battery, trainer\n5. Byte 7: Mapper, VS/Playchoice, NES 2.0\n6. Bytes 8-15: Various flags and padding\n\nWould you like me to analyze the header of your uploaded ROM?" },
]

export function ChatSection() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: inputMessage.trim()
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
      // Here you would typically call an API to get the bot's response
      // For this example, we'll just add a mock response after a short delay
      setTimeout(() => {
        const botResponse: ChatMessage = {
          id: messages.length + 2,
          sender: 'bot',
          content: "I've received your message. How can I assist you further with game reversing?"
        }
        setMessages(prevMessages => [...prevMessages, botResponse])
      }, 1000)
    }
  }

  return (
    <div className="relative flex h-full flex-col rounded-xl bg-muted/50 p-4">
      <Badge variant="outline" className="absolute right-3 top-3">
        Chat
      </Badge>
      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex items-start space-x-2 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                }`}
              >
                <div className={`rounded-full p-2 ${message.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Bot className="h-4 w-4 text-secondary-foreground" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form
        onSubmit={handleSendMessage}
        className="relative mt-4 overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-[60px] max-h-[120px] resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <div className="flex items-center p-3 pt-0">
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </form>
    </div>
  )
}