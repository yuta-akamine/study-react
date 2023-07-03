import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
// import { Main } from '@/src/components/Main'
import { Header } from '@/components/Header'
import Link from 'next/link'

// ReactからuseCallback、useEffectをインポートしている
import { useCallback, useEffect } from 'react'
// import { Header } from '@/src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const foo = 1;

  // 無名関数は使えないので関数名をつける
  const handleClick = useCallback((e) => { // 第一引数eにはクリックした際のイベントが入っている
    // イベントのtargetプロパティはDOMになったaタグを値に持つ
    console.log(e.target.href); // aタグをクリックするとDOM aのhref属性の値(url)がコンソールに出力される
    e.preventDefault(); //画面遷移を無効にしている。
    alert(foo);
  }, []);

  // useEffectを利用してアロー関数を定義
  useEffect(() => { // このファイルHomeコンポーネントがマウント(レンダリングされる瞬間)時の処理。
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue"; //背景色をlightblueにする

    //useEffectにreturnを記述することでアンマウント時の処理を記述できる。
    return () => { // アンマウント時の処理。Cleanup Functionともいう
      console.log("アンマウント時");
      document.body.style.backgroundColor = ""; //デフォルトの背景色にする
    };
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
