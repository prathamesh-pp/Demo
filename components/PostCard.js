export default function PostCard({ user, avatar, content, image, likes, comments }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-3 mb-2">
        <img src={avatar} alt="user" className="w-10 h-10 rounded-full"/>
        <span className="font-semibold">{user}</span>
      </div>
      <p className="mb-2">{content}</p>
      {image && <img src={image} alt="post" className="rounded-md mb-2"/>}
      <div className="flex gap-4 text-gray-500 mt-2">
        <span>👍 {likes}</span>
        <span>💬 {comments}</span>
        <button className="ml-auto text-purple-600 font-semibold">Share</button>
      </div>
    </div>
  )
}
