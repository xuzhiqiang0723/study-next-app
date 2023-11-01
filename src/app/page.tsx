import { Links } from '@/components/links'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js'
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <Links linkList={['dashboard', 'settings']} />
    </>
  )
}
