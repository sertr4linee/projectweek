'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Send } from 'lucide-react'
import ChatMessage from './chatmessage'
import ChatInput from './chatinput'

export default function OrangeChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition-colors"
        >
          Chat avec Orange
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden">
          <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
            <h2 className="font-bold">Chat Orange</h2>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              ✕
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
          <ChatInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  )
}
