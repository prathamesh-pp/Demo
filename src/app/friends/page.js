export default function FriendsPage() {
  return (
    <section className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6 mt-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-6">Friends List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="flex flex-col items-center">
            <img src={`/avatar${i}.png`} alt="Friend" className="w-14 h-14 rounded-full"/>
            <span className="mt-3 text-gray-700 font-semibold">Friend {i}</span>
            <button className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-700 transition text-sm">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  )
}
