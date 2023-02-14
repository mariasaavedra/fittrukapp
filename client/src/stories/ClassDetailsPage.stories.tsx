import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ClassDetailsPage, { ClassDetailsPageProps } from '../components/ClassDetailsPage/ClassDetailsPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Library/ClassDetailsPage',
    component: ClassDetailsPage,
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
} as ComponentMeta<typeof ClassDetailsPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClassDetailsPage> = (args) => <ClassDetailsPage {...args} />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const exampleProps: ClassDetailsPageProps = {
// Add props here
};
Example.args = exampleProps;