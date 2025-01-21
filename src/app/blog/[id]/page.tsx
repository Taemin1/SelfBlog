export default function BlogDetail({ params }: { params: { id: string } }) {
    return (
      <div>
        <h1>블로그 상세 페이지</h1>
        <p>이 페이지는 블로그 ID {params.id}에 대한 상세 내용입니다.</p>
      </div>
    );
  }
  