export default function NotificationsPage() {
  return (
    <section className="max-w-lg mx-auto bg-white rounded-xl shadow p-6 mt-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-6">Notifications</h1>
      <ul className="space-y-4">
        <li className="bg-gray-50 p-4 rounded shadow-sm flex gap-4 items-start">
          <span className="text-green-500 text-xl">👍</span>
          <div>
            <span className="font-semibold">Alice</span> liked your post.
            <div className="text-xs text-gray-500 mt-1">2 min ago</div>
          </div>
        </li>
        <li className="bg-gray-50 p-4 rounded shadow-sm flex gap-4 items-start">
          <span className="text-blue-500 text-xl">💬</span>
          <div>
            <span className="font-semibold">Bob</span> commented on your photo.
            <div className="text-xs text-gray-500 mt-1">10 min ago</div>
          </div>
        </li>
        <li className="bg-gray-50 p-4 rounded shadow-sm flex gap-4 items-start">
          <span className="text-purple-500 text-xl">👥</span>
          <div>
            <span className="font-semibold">Jane</span> sent you a friend request.
            <div className="text-xs text-gray-500 mt-1">1 hr ago</div>
          </div>
        </li>
      </ul>
    </section>
  )
}
