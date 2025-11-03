'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    alert('Implement search: ' + query)
  }

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-2">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8"/>
          <span className="font-bold text-xl text-purple-600">MySocial</span>
        </Link>
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/friends">Friends</Link></li>
          <li><Link href="/messages">Messages</Link></li>
          <li><Link href="/notifications">Notifications</Link></li>
        </ul>
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search..."
            className="px-3 py-1 rounded-md border border-gray-300 focus:border-purple-400"
          />
          <button type="submit" className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition">Search</button>
        </form>
        <button className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition" onClick={()=>router.push('/login')}>
          Logout
        </button>
      </div>
    </nav>
  )
}
