import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js'
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
