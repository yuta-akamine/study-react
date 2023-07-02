import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      {/* propsでpageを渡している */}
      <Main page="about" />
    </div>
  )
}
