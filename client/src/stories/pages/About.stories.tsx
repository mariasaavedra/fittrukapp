import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import About from "../../pages/about";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Pages/About",
  component: About,
} as ComponentMeta<typeof About>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof About> = (args) => <About />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
