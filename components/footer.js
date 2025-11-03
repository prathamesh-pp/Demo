export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
        <div className="flex gap-4 text-xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
