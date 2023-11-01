'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

export default function RootLayout({
  children,
  team,
  analytics
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  const allSegments = useSelectedLayoutSegments()
  console.log('allSegments', allSegments)
  return (
    <html lang="en">
      <body>
        <>
          {children}
          {team}
          {analytics}
          <Link style={{ position: 'absolute', marginTop: 100 }} href={`/`}>
            back index
          </Link>
        </>
      </body>
    </html>
  )
}
