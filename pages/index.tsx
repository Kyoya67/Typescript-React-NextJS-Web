import Link from "next/link";
import type { NextPage } from "next";
import styled from "styled-components";

const H1 = styled.h1`
  color: red;
  font-size: 5rem;
`;

const Home: NextPage = () => {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <H1>Hello World</H1>
        <div style={{ marginTop: "2rem" }}>
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

        <div style={{ marginTop: "2rem" }}>
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
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2>Image Sample</h2>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="/image-sample" style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#6c757d",
              color: "white",
              textDecoration: "none"
            }}>
              Image Sample
            </Link>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h2>API</h2>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Link href="/sayHello" style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#6c757d",
                color: "white",
                textDecoration: "none"
              }}>
                Say Hello
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
