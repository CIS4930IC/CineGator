import './globals.css'

export const metadata = {
  title: 'CineGator',
  description: 'A movie app built with Tailwind CSS and React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
