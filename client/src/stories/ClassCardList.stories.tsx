import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ClassCardList, {
  ClassCardListProps,
} from "../components/ClassCardList/ClassCardList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Components/ClassCardList",
  component: ClassCardList,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/AyWKarq4WhziyvGaUvW7xx/FitTruck?node-id=161%3A39555",
    },
  },
} as ComponentMeta<typeof ClassCardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClassCardList> = (args) => (
  <ClassCardList {...args} />
);

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const exampleProps: ClassCardListProps = {
  // Add props here
};
Example.args = exampleProps;
