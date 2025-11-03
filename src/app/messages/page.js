// src/app/messages/page.js
export default function Messages() {
  const chats = [
    { name: "Aarav", message: "Hey, how are you?" },
    { name: "Neha", message: "Let’s meet tomorrow!" },
  ];
  return (
    <section className="container mt-4">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <div className="flex flex-col gap-3">
        {chats.map((chat, i) => (
          <div key={i} className="card">
            <h3 className="font-medium">{chat.name}</h3>
            <p className="muted">{chat.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
