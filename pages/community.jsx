import Link from "next/link"

const ProductsPage = () => {
  return (
    <div>
      <h1>커뮤니티 페이지</h1>
      {/* 페이지 내용 추가 */}
      <Link href="/" legacyBehavior>
        <a>홈으로 돌아가기</a>
      </Link>
    </div>
  )
}

export default ProductsPage
