import BlogCard from '@/components/BlogCard';

export default function HomePage() {
  const blogPosts = [
    { id: 1, title: "Next.js 시작하기", description: "Next.js 기본 개념 소개" },
    { id: 2, title: "React 성능 최적화", description: "리액트 성능 최적화 팁" },
  ];

  return (
    <div>
      <h1>블로그 목록</h1>
      {blogPosts.map((post) => (
        <BlogCard key={post.id} id={post.id} title={post.title} description={post.description} />
      ))}
    </div>
  );
}
