// src/app/notifications/page.js
export default function Notifications() {
  const notes = [
    "Your post got 12 likes",
    "Neha commented on your photo",
    "Rohan started following you",
  ];
  return (
    <section className="container mt-4">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="flex flex-col gap-3">
        {notes.map((n, i) => (
          <li key={i} className="card text-sm">{n}</li>
        ))}
      </ul>
    </section>
  );
}
