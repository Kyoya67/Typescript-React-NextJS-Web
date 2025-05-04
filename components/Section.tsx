import React from "react";
import styled from "styled-components";
import Link from "next/link";

const SectionWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing.large};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.white};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.medium};
  margin-top: ${(props) => props.theme.spacing.medium};
`;

type ColorKey = keyof typeof import("../theme").theme.colors;

const Button = styled.button<{ color: ColorKey }>`
  padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
  font-size: 1rem;
  border-radius: 0.5rem;
  display: flex;
  gap: ${(props) => props.theme.spacing.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${({ color, theme }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

type LinkItem = {
    href: string;
    label: string;
    color: ColorKey;
};

type SectionWithLinksProps = {
    title: string;
    links: LinkItem[];
};

const SectionWithLinks: React.FC<SectionWithLinksProps> = ({ title, links }) => (
    <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        <ButtonContainer>
            {links.map((link) => (
                <Button key={link.href} color={link.color}>
                    <Link href={link.href}>{link.label}</Link>
                </Button>
            ))}
        </ButtonContainer>
    </SectionWrapper>
);

export default SectionWithLinks; 