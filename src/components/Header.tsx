import Link from 'next/link';
import styles from '@/styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
      <h1>My Blog</h1>
      </Link>
      <nav>
        <Link href="/">홈</Link>
        <Link href="/about">소개</Link>
      </nav>
      <Link href="/login">
      <button className={styles.loginButton}>로그인</button>
      </Link>
    </header>
  );
}
