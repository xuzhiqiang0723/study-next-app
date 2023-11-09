// Import for the headers dependency
import { headers } from 'next/headers'
export async function GET(request: Request) {
  const useHeader = headers()
  const header = useHeader.get('content-type')
  return new Response('We are using the content-type header!', {
    status: 200,
    headers: { 'content-type': header! }
  })
}
