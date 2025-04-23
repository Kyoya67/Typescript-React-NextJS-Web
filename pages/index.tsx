import Link from "next/link";
import type { NextPage } from "next";
import styled, { css } from "styled-components";

const redBox = css`
  padding: 0.25rem 1rem;
  border: 0.25rem solid red;
  border-radius: 0.8rem;
`

const font = css`
  color: #1e90ff;
  font-size: 2rem;
`

const ButtonCssFunc = styled.button`
  background: transparent;
  margin: 1rem;
  cursor: pointer;

  ${redBox}
  ${font}
`

const TextCssFunc = styled.p`
  font-weight: bold;

  ${font}
`

type ButtonProps = {
  color: string;
  backgroundColor: string;
}

const H1 = styled.h1`
  color: red;
  font-size: 5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;;
`;

const Button = styled.button<ButtonProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
`;

const CircleButton = styled(Button)`
  border-radius: 50%;
  padding: 1rem;
`

const Page: NextPage = () => {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <div style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
          <H1>Hello World</H1>
          <CircleButton color="white" backgroundColor="gray">CircleButton</CircleButton>
        </div>
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
          <ButtonCssFunc>ButtonCssFunc</ButtonCssFunc>
          <TextCssFunc>TextCssFunc</TextCssFunc>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h2>静的ページ</h2>
          <ButtonContainer>
            <Button color="white" backgroundColor="gray">
              <Link href="/ssg">
                SSG Page
              </Link>
            </Button>
            <Button color="white" backgroundColor="gray">
              <Link href="/ssr">
                SSR Page
              </Link>
            </Button>
          </ButtonContainer>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2>動的ルーティング</h2>
          <ButtonContainer>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button color="white" backgroundColor="blue">
                <Link href="/ssg_posts/1">
                  SSG Post 1
                </Link>
              </Button>
              <Button color="white" backgroundColor="blue">
                <Link href="/ssg_posts/2">
                  SSG Post 2
                </Link>
              </Button>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button color="white" backgroundColor="green">
                <Link href="/ssr_posts/1">
                  SSR Post 1
                </Link>
              </Button>
              <Button color="white" backgroundColor="green">
                <Link href="/ssr_posts/2">
                  SSR Post 2
                </Link>
              </Button>
            </div>
          </ButtonContainer>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2>Image Sample</h2>
          <ButtonContainer>
            <Button color="white" backgroundColor="gray">
              <Link href="/image-sample">
                Image Sample
              </Link>
            </Button>
          </ButtonContainer>

          <div style={{ marginTop: "2rem" }}>
            <h2>API</h2>
            <ButtonContainer>
              <Button color="white" backgroundColor="gray">
                <Link href="/sayHello">
                  Say Hello
                </Link>
              </Button>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;
