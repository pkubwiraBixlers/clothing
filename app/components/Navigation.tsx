import { useState } from "react";
import { Link } from "react-router";

interface NavigationProps {
  brandName?: string;
}

export function Navigation({ brandName = "ThePaulin" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-primary">
          {brandName}
        </Link>

        <div className="flex gap-8 items-center">
          <Link to="/" className="text-primary hover:text-primary-dark transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-primary hover:text-primary-dark transition-colors">
            Blog
          </Link>
          <a
            href="https://bixlers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            Partnership
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t">
          <div className="px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-primary hover:text-primary-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block text-primary hover:text-primary-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <a
              href="https://bixlers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:text-primary-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partnership
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
