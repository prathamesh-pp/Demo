// components/PostCard.js
export default function PostCard({ name, content, time }) {
  return (
    <div className="card hover-lift">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-xs muted">{time}</p>
      </div>
      <p className="text-sm">{content}</p>
    </div>
  );
}
