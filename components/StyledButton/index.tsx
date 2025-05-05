import styled, { css } from "styled-components";

export type StyledButtonProps = {
    variant: "primary" | "success" | "transparent";
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ variant, theme }) => {
        switch (variant) {
            case "primary":
                return css`
                    background-color: ${theme.colors.blue};
                    color: ${theme.colors.white};
                    border: none;
                `;
            case "success":
                return css`
                    background-color: ${theme.colors.green};
                    color: ${theme.colors.white};
                    border: none;
                `;
            case "transparent":
                return css`
                    background-color: transparent;
                    color: ${theme.colors.black};
                    border: 1px solid ${theme.colors.black};
                `;
        }
    }}

    border-radius: 12px;
    font-size: 14px;
    height: 38px;
    line-height: 22px;
    letter-spacing: 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;