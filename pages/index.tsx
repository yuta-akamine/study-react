import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
// import { Main } from '@/src/components/Main'
import { Header } from '@/components/Header'
import Link from 'next/link'
import { useCallback } from 'react'
// import { Header } from '@/src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const foo = 1;

  // 無名関数は使えないので関数名をつける
  const handleClick = useCallback((e: { target: { href: any }; preventDefault: () => void }) => { // 第一引数eにはクリックした際のイベントが入っている
    // イベントのtargetプロパティはDOMになったaタグを値に持つ
    console.log(e.target.href); // aタグをクリックするとDOM aのhref属性の値(url)がコンソールに出力される
    e.preventDefault(); //画面遷移を無効にしている。
    alert(foo);
  }, []);
  
  return (
    <div>
      <Header />
      
      <Link
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </Link>

      {/* propsでpageを渡している */}
      <Main page="index" />
    </div>
  )
}
