'use client'
import { useState } from 'react'

export default function MessagesPage() {
  const [active, setActive] = useState(1)
  const messages = [
    { id: 1, name: "Alice", last: "How's it going?", group: false },
    { id: 2, name: "Study Buddies", last: "Let's review tomorrow.", group: true },
    { id: 3, name: "Bob", last: "Meeting at 5pm?", group: false },
  ]
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 mt-6 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 border-r pr-4">
        <h2 className="text-lg font-bold text-purple-700 mb-4">Conversations</h2>
        <ul className="space-y-2">
          {messages.map(msg => (
            <li
              key={msg.id}
              onClick={() => setActive(msg.id)}
              className={`cursor-pointer p-3 rounded-lg transition ${active===msg.id ? 'bg-purple-100' : 'bg-gray-50'}`}
            >
              <span className="font-semibold">{msg.name}</span>
              <span className="block text-xs text-gray-500">{msg.last}</span>
              {msg.group && <span className="inline-block ml-1 px-2 bg-purple-300 text-purple-800 rounded-full text-xs">Group</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 px-4">
        <h2 className="font-bold text-gray-700 mb-4">Chat</h2>
        <div className="h-64 overflow-y-auto bg-gray-50 p-4 rounded">
          <div className="mb-2 text-left">
            <span className="px-3 py-1 inline-block bg-purple-200 rounded text-purple-900">
              Hi there!
            </span>
          </div>
          <div className="mb-2 text-right">
            <span className="px-3 py-1 inline-block bg-blue-200 rounded text-blue-900">Hello 👋</span>
          </div>
          {/* Simulate more chat bubbles */}
        </div>
        <form className="flex gap-2 mt-4">
          <input type="text" placeholder="Type a message..." className="flex-1 px-3 py-2 border rounded focus:ring-2 focus:ring-purple-500"/>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800">Send</button>
        </form>
      </div>
    </section>
  )
}
