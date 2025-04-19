import Link from "next/link";

export default function Home() {
  return (
    <>
      <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", flexDirection: "column", alignItems: "center" }}>
        <div>
          <h2>静的ページ</h2>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/ssg" style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#6c757d",
              color: "white",

              textDecoration: "none"
            }}>
              SSG Page
            </Link>
            <Link href="/ssr" style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#6c757d",
              color: "white",

              textDecoration: "none"
            }}>
              SSR Page
            </Link>
          </div>
        </div>

        <div>
          <h2>動的ルーティング</h2>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/ssg_posts/1" style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#0070f3",
                color: "white",

                textDecoration: "none"
              }}>
                SSG Post 1
              </Link>
              <Link href="/ssg_posts/2" style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#0070f3",
                color: "white",

                textDecoration: "none"
              }}>
                SSG Post 2
              </Link>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/ssr_posts/1" style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#28a745",
                color: "white",

                textDecoration: "none"
              }}>
                SSR Post 1
              </Link>
              <Link href="/ssr_posts/2" style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#28a745",
                color: "white",

                textDecoration: "none"
              }}>
                SSR Post 2
              </Link>
              <Link href="/image-sample" style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#6c757d",
                color: "white",

                textDecoration: "none"
              }}>
                Image Sample
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
