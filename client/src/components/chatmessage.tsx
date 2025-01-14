import { Message } from 'ai'

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`flex ${
        message.role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${
          message.role === 'user'
            ? 'bg-orange-100 text-gray-800'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}

