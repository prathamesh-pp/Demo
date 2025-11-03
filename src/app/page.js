import Banner from '../../components/Banner'
import PostCard from '../../components/PostCard'
import TrendingTopics from '../../components/TrendingTopics'


const MOCK_POSTS = [
  {
    id: 1,
    user: 'john_doe',
    avatar: '/avatar1.png',
    content: 'Check out this awesome photo!',
    image: '/nature.jpg',
    likes: 12,
    comments: 4,
  },
  {
    id: 2,
    user: 'lisa_92',
    avatar: '/avatar2.png',
    content: 'Had a great day hiking in the mountains.',
    image: '/mountain.jpg',
    likes: 8,
    comments: 2,
  },
]

export default function HomePage() {
  return (
    <section className="flex flex-col lg:flex-row gap-8">
      {/* Main Feed */}
      <div className="flex-1 space-y-6">
        <Banner />

        {/* New Post Box */}
        <div className="bg-white rounded-xl shadow p-4 mb-4">
          <textarea
            className="w-full border rounded-md p-2 mb-2"
            rows={3}
            placeholder="Share something..."
          />
          <div className="flex gap-2">
            <button className="px-4 py-1 rounded bg-purple-600 text-white">
              Post
            </button>
            <input type="file" className="hidden" id="add-media" />
            <label
              htmlFor="add-media"
              className="cursor-pointer px-4 py-1 rounded bg-gray-100 border border-gray-300"
            >
              + Image/Video
            </label>
          </div>
        </div>

        {/* User Feed */}
        <div className="space-y-4">
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-72">
        <TrendingTopics />
      </aside>
    </section>
  )
}
