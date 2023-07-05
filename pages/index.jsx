import { Inter } from 'next/font/google'
import { Main } from '@/components/Main'
// import { Main } from '@/src/components/Main'
import { Header } from '@/components/Header'
// import { Header } from '@/src/components/Header'
import Link from 'next/link'

// ReactからuseCallback、useEffectをインポートしている
import { useCallback, useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  //useStateは配列を返している。配列の分割代入 引数はcountの初期値
	const [count, setCount] = useState(1);
	// 上の記述と同じ意味
	// const array = useState(1); useStateの要素番号0の値である1を引数で指定して代入
	// const count = array[0]
	// const setCount = array[1]

  // ボタンクリック時の処理。無名関数は使えないので関数名をつける
  // useCallbackを利用しているのでレンダリングされないよう制御中
  const handleClick = useCallback(() => {

    // countが10未満の場合countを+1する条件
    if(count < 10) {
      // setCountの引数にアロー関数を利用し、現在のcountを引数で受け取りcount+1して代入しcountを返す
      setCount(count => count + 1);
      // // 上記は下記を省略した記述。
      // setCount(function(count) {
      //   return count + 1;
      // });
    }
  }, [count]); // countが追加された場合のみレンダリングする
  
  // useEffectを利用してアロー関数を定義。マウント時のレンダリング設定。
  useEffect(() => { // このファイルHomeコンポーネントがマウント(レンダリングされる瞬間)時の処理。
    document.body.style.backgroundColor = "lightblue"; //背景色をlightblueにする
    
    //useEffectにreturnを記述することでアンマウント時の処理を記述できる。
    return () => { // アンマウント時の処理。Cleanup Functionともいう
      document.body.style.backgroundColor = ""; //デフォルトの背景色にする
    };
  }, []);
  
  return (
    <div>
      <Header />
      <h1>{count}</h1>
      <button
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </button>

      {/* propsでpageを渡している */}
      <Main page="index" />
    </div>
  )
}