import './globals.css'
import { Metadata } from 'next'

export const metadata = {
  title: 'Oscar Jerez - Full Stack Developer',
  description: 'Full Stack Developer specializing in building scalable startups. Expert in C#, JavaScript, Node.js, React.js, SQL, and Git.',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Node.js', 'C#', 'JavaScript'],
  authors: [{ name: 'Oscar Jerez' }],
  openGraph: {
    title: 'Oscar Jerez - Full Stack Developer',
    description: 'Building scalable solutions for modern startups',
    url: 'https://oscarjerez.dev',
    siteName: 'Oscar Jerez Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oscar Jerez - Full Stack Developer',
    description: 'Building scalable solutions for modern startups',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
