import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

let {first, second, third, ...rest} = props

export default function Home() {
  return (
    <>
      <div>
          <Link href={`/customers`}>Go to Customers Page</Link>
      </div>
    </>
  )
}
