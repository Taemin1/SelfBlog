import Link from 'next/link';
import styles from '@/styles/blogcard.module.css';

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
}

export default function BlogCard({ id, title, description }: BlogCardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={`/blog/${id}`}>자세히 보기</Link>
    </div>
  );
}
