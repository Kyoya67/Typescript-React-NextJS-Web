import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            gray: string;
            lightGray: string;
            blue: string;
            green: string;
            white: string;
            black: string;
        };
        fonts: {
            body: string;
            heading: string;
        };
        breakpoints: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        spacing: {
            small: string;
            medium: string;
            large: string;
        };
    }
} 