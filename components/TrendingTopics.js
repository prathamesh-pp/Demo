export default function TrendingTopics() {
  const topics = ['#nextjs', '#tailwindcss', '#webdev', '#reactjs', '#frontend']
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-bold mb-3 text-lg">Trending Topics</h3>
      <ul className="space-y-2">
        {topics.map(topic => (
          <li key={topic} className="text-purple-700 hover:underline cursor-pointer">{topic}</li>
        ))}
      </ul>
    </div>
  )
}
