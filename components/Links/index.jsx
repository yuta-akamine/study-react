// 定数なので大文字
const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    title: "Docs ",
    description: "Find in-depth information about Next.js features and API."
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    title: "Learn ",
    description: "Learn about Next.js in an interactive course with quizzes!"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    title: "Templates ",
    description: "Discover and deploy boilerplate example Next.js projects."
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    title: "Deploy ",
    description: "Instantly deploy your Next.js site to a shareable URL with Vercel."
  },

];

export function Links() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

      {/* ITEMSのマップ関数を利用。配列の要素を最後まで繰り返す */}
      {/* 引数itemはhref、title、descriptionのキーを受け取る */}
      {/* map内にアロー(無名)関数を宣言する */}
      {ITEMS.map((item) => {
        // 要素を返す
        return (
          <a
            // mapで繰り返すコンポーネントなので一意のキーを記述する必要がある
            key={item.href}
            // mapでhrefを利用
            href={item.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {/* mapでtitleを利用 */}
              {item.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {/* mapでdescriptionを利用 */}
                {item.description}
              </p>
          </a>
        );
      })}

    </div>
  )
}
