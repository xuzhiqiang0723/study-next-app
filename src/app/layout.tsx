'use client'
import '@/assets/styles/globals.css'
import Link from 'next/link'

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

export default function RootLayout({
  children,
  team,
  analytics,
  modal
}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
  modal: React.ReactNode
}) {
  const allSegments = useSelectedLayoutSegments()
  console.log('allSegments', allSegments)
  return (
    <html lang="en">
      <body>
        <>
          {children}
          {modal}
        </>
      </body>
    </html>
  )
}
