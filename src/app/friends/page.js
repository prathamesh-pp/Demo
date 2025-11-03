// src/app/friends/page.js
export default function Friends() {
  const friends = ["Aarav", "Neha", "Rohan", "Isha"];
  return (
    <section className="container mt-4">
      <h2 className="text-xl font-semibold mb-4">Your Friends</h2>
      <div className="grid-cards">
        {friends.map((f, i) => (
          <div key={i} className="card hover-lift text-center">
            <h3 className="font-medium">{f}</h3>
            <p className="muted text-sm">Online</p>
          </div>
        ))}
      </div>
    </section>
  );
}
