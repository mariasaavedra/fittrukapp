import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Register from "../../pages/auth/register";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Pages/Register",
  component: Register,
} as ComponentMeta<typeof Register>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Register> = (args) => <Register />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
