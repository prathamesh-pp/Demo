// src/app/layout.js
import "../app/globals.css";
import Navbar from "../../components/navbar";

export const metadata = {
  title: "Next.js App - Demo",
  description: "Demo with minimal UI updates + dark mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="container" style={{paddingTop: "0.75rem"}}>
          {children}
        </main>
      </body>
    </html>
  );
}
