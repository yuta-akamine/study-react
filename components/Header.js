import Link from "next/link";
import classes from './Header.module.css'

export function Header() {
  return (
    // module.css適用
    <header className={classes.header}>
      {/* linkコンポーネント適用 */}
      <Link href="/">
        {/* スタイル適用 */}
        <p className={classes.anchor}>
          Index
        </p>
      </Link>
      <Link href="/about">
        <p className={classes.anchor}>
          About
        </p>
      </Link>
    </header>
  );
}