// components/footer.js
export default function Footer() {
  return (
    <footer className="container mt-12 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm muted">
      <p>© {new Date().getFullYear()} SocialConnect. All rights reserved.</p>
    </footer>
  );
}
