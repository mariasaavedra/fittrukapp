import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "../../pages/auth/login";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Pages/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Login> = (args) => <Login />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
