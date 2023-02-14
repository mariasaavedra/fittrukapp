import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReadMoreReadLess, { ReadMoreReadLessProps } from '../components/ReadMoreReadLess/ReadMoreReadLess';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Library/ReadMoreReadLess',
    component: ReadMoreReadLess,
    //  parameters: {
    //     design: {
    //        type: 'figma',
    //        url: 'https://www.figma.com/file/AyWKarq4WhziyvGaUvW7xx/FitTruck'
    //     }
    //  }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof ReadMoreReadLess>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReadMoreReadLess> = (args) => <ReadMoreReadLess {...args} />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const exampleProps: ReadMoreReadLessProps = {
// Add props here
};
Example.args = exampleProps;