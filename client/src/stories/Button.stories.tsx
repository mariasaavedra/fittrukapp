import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from "../components/Button/Button";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Components/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/AyWKarq4WhziyvGaUvW7xx/FitTruck?node-id=161%3A39550",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //     backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const primaryProps: ButtonProps = {
  // Add props here
  children: "Click me",
  backgroundColor: "primary",
};
Primary.args = primaryProps;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const secondaryProps: ButtonProps = {
  // Add props here
  children: "Click me",
  backgroundColor: "secondary",
};
Secondary.args = secondaryProps;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const disabledProps: ButtonProps = {
  // Add props here
  children: "Click me",
  backgroundColor: "disabled",
};
Disabled.args = disabledProps;
