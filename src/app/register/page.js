'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Register: Backend needed')
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-purple-600 text-center">Create your account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"/>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"/>
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-500"/>
          <button type="submit" className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white text-lg font-semibold transition hover:opacity-90">
            Register
          </button>
        </form>
        <div className="text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link className="text-purple-700 font-medium underline" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
