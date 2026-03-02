'use client'

import { useEffect, useState } from 'react'

interface DiscordMessage {
  id: string
  content: string
  timestamp: string
  author: {
    name: string
    avatar: string | null
  }
  images: string[]
}

function formatDate(iso: string) {
  const d = new Date(iso)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hour = String(d.getHours()).padStart(2, '0')
  const min = String(d.getMinutes()).padStart(2, '0')
  return `${year}.${month}.${day} ${hour}:${min}`
}

export default function DiscordNews() {
  const [messages, setMessages] = useState<DiscordMessage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/discord')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setMessages(data)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="mt-4 mb-6 flex justify-center py-8">
        <p className="text-brown-light text-[13px] lg:text-[18px]">読み込み中...</p>
      </div>
    )
  }

  if (messages.length === 0) {
    return null
  }

  return (
    <div className="mt-4 mb-6 mx-auto max-w-4xl space-y-3 max-h-[500px] overflow-y-auto rounded-lg border border-cream-border bg-cream-box p-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="border-b border-cream-border pb-3 last:border-b-0 last:pb-0"
        >
          <div className="flex items-center gap-2 mb-1">
            {msg.author.avatar && (
              <img
                src={msg.author.avatar}
                alt={msg.author.name}
                className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
              />
            )}
            <span className="text-brown font-bold text-[12px] lg:text-[16px]">
              {msg.author.name}
            </span>
            <span className="text-brown-light text-[10px] lg:text-[13px]">
              {formatDate(msg.timestamp)}
            </span>
          </div>
          {msg.content && (
            <p className="text-brown text-[13px] lg:text-[18px] leading-relaxed whitespace-pre-wrap">
              {msg.content}
            </p>
          )}
          {msg.images.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {msg.images.map((url) => (
                <img
                  key={url}
                  src={url}
                  alt=""
                  className="rounded max-h-[200px] lg:max-h-[300px] object-cover"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
