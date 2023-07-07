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

  //useStateの引数はcount初期値の設定。配列を返している。配列の分割代入
	const [count, setCount] = useState(1);
	// 上の記述と同じ意味
	// const array = useState(1); useStateの要素番号0の値である1を引数で指定して代入
	// const count = array[0]
	// const setCount = array[1]

	// textの初期値は空文字を代入。
	const [text, setText] = useState("");

	// isShowの初期値はtrueを代入。
	const [isShow, setisShow] = useState(true);

  // ボタンクリック時の処理。無名関数は使えないので関数名をつける
  // useCallbackを利用しレンダリングされないよう制御中
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

  // 表示、非表示切り替えボタンクリック時の処理
  // useCallbackを利用しレンダリングされないよう制御中
  const handleDisplay = useCallback(() => {
    // 真偽値切り替え
    // isShowがtrueならfalse、isShowがfalseならtrueを返す
    setisShow(isShow => !isShow);

    // 下記と同じ意味
    // setisShow((isShow) => {
      
    //   if (isShow === true) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });

  }, []);

    // inputテキスト入力時の処理
    // useCallbackを利用しレンダリングされないよう制御中
    // TypeScriptでエラーが出る。Type error: Parameter 'e' implicitly has an 'any' type.
    const handleChange = useCallback((e: unknown) => { //引数eはイベントを受け取っている
      // 文字列制御の場合。textの長さが5より大きいならsetText実行せずにonChangeの処理終了
      if (e.target.value.length > 5) {
        alert("5文字以内にしてください");
        return; //ここでhandleChangeの処理終了
      }
      // setText関数で入力された文字の値をtextに代入し画面表示される
      // 空白の入力はできないよう制御
      setText(e.target.value.trim());
    }, []);
  
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
      {/* jsx内でif文は利用できないので三項演算子。trueならh1タグを返し、falseならnull(非表示)を返す */}
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      {/* h1タグ表示、非表示切り替えボタン */}
      <button
        // クリック時の処理
        onClick={handleDisplay}
      >
        {/* jsx内でif文は利用できないので三項演算子。trueなら非表示を返し、falseなら表示を返す */}
        {isShow ? "非表示" : "表示"}
      </button>
      <input 
				type="text"
        // constで定義したtextを表示
				value={text}

        // inputの文字が変わった時の処理
				onChange={handleChange}
				// onChange={(e) => { //引数eはイベントを受け取っている
				// 	// 文字列制御の場合。textの長さが5以上ならsetText実行せずにonChangeの処理終了
				// 	if (text.length >= 5){
				// 		return;
				// 	}
        //   // setText関数で入力された文字の値をtextに代入し画面表示される
				// 	setText(e.target.value);
				// }}
			/>

      {/* propsでpageを渡している */}
      <Main page="index" />
    </div>
  )
}