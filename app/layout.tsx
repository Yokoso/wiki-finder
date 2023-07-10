import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Wiki-finder',
  description: 'Wiki-finder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-400'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
