'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-500 text-sm mb-4">
          &copy; {new Date().getFullYear()} Oscar Jerez. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs">
          Built with Next.js 14, Tailwind CSS, and passion for building great software.
        </p>
      </div>
    </footer>
  )
}
