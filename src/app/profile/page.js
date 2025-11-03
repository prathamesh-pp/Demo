export default function ProfilePage() {
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 mt-6">
      <div className="flex items-center space-x-6 mb-6">
        <img src="/avatar1.png" alt="Profile" className="w-20 h-20 rounded-full border-4 border-purple-500" />
        <div>
          <h1 className="text-2xl font-bold text-purple-700">John Doe</h1>
          <p className="text-gray-600">Web Developer | React & Next.js Enthusiast</p>
          <button className="mt-2 py-1 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Edit Profile</button>
        </div>
      </div>
      <h2 className="font-bold text-xl mb-3">Friends</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="flex flex-col items-center">
            <img src={`/avatar${i}.png`} alt="Friend" className="w-12 h-12 rounded-full"/>
            <span className="mt-2 text-gray-700 font-semibold">Friend {i}</span>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-xl mb-3">Posts</h2>
      <div className="space-y-4">
        {[1,2].map(i=>(
          <div key={i} className="bg-gray-50 rounded-xl p-4 shadow-sm">
            <p className="mb-2 font-medium">This is post #{i} content...</p>
            <div className="text-gray-600 text-sm flex gap-4">
              <span>👍 5</span>
              <span>💬 1</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
