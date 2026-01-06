import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">FL</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              FitLife
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/About" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">
              About
            </Link>
            <Link href="/Services" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">
              Contact
            </Link>
            <Link 
              href="/join" 
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-yellow-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}