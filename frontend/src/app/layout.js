import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Campus Sphere",
  description: "A fresh start",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
