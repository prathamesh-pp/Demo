// src/app/register/page.js
"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${form.name}`);
  };

  return (
    <section className="container max-w-md mt-8">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="card flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 border rounded-md bg-transparent"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded-md bg-transparent"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded-md bg-transparent"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </section>
  );
}
