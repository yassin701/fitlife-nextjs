import "./globals.css";
import Header from "./Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">{children}</main> {/* Add padding-top */}
      </body>
    </html>
  );
}