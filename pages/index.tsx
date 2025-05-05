import type { NextPage } from "next";
import styled from "styled-components";
import SectionWithLinks from "../components/Section";

const PageContainer = styled.div`
  margin: ${(props) => props.theme.spacing.large};
`;

const Page: NextPage = () => {
  return (
    <PageContainer>
      <SectionWithLinks
        title="静的ページ"
        links={[
          { href: "/ssg", label: "SSG Page", color: "lightGray" },
          { href: "/ssr", label: "SSR Page", color: "lightGray" },
        ]}
      />
      <SectionWithLinks
        title="動的ルーティング"
        links={[
          { href: "/ssg_posts/1", label: "SSG Post 1", color: "blue" },
          { href: "/ssg_posts/2", label: "SSG Post 2", color: "blue" },
          { href: "/ssr_posts/1", label: "SSR Post 1", color: "green" },
          { href: "/ssr_posts/2", label: "SSR Post 2", color: "green" },
        ]}
      />
      <SectionWithLinks
        title="Image Sample"
        links={[
          { href: "/image-sample", label: "Image Sample", color: "lightGray" },
        ]}
      />
      <SectionWithLinks
        title="API"
        links={[
          { href: "/sayHello", label: "Say Hello", color: "lightGray" },
        ]}
      />
    </PageContainer>
  )
}

export default Page;
