'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const router = useRouter()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Mock: redirect to home
    router.push('/')
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-teal-600 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-500"/>
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-teal-500"/>
          <button type="submit" className="w-full py-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-md text-white text-lg font-semibold transition hover:opacity-90">
            Login
          </button>
        </form>
        <div className="text-center">
          <span className="text-gray-600">No account? </span>
          <Link className="text-teal-700 font-medium underline" href="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}
