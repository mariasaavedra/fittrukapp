import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo, { LogoProps } from '../components/Logo/Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Library/Components/Logo',
    component: Logo,
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
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const exampleProps: LogoProps = {
// Add props here
};
Example.args = exampleProps;