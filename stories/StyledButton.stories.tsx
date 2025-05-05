import { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof StyledButton> = {
    title: "StyledButton",
    component: StyledButton,
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "success", "transparent"],
            },
        },
        children: {
            control: {
                type: "text",
            },
        },
    },
};
export default meta;

const incrementAction = action("increment");

export const Template: StoryFn<typeof StyledButton> = (args) => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        incrementAction(e, count);
        setCount((c) => c + 1);
    };
    return (
        <StyledButton variant={args.variant} onClick={onClick}>
            {`${args.children} : ${count}`}
        </StyledButton>
    );
};

export const TemplateTest = Template.bind({});

TemplateTest.args = {
    variant: "primary",
    children: "Primary Button",
};
