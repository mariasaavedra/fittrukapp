import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserCard, { UserCardProps } from '../components/UserCard/UserCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Library/UserCard',
    component: UserCard,
     parameters: {
        design: {
           type: 'figma',
           url: 'https://www.figma.com/file/AyWKarq4WhziyvGaUvW7xx/FitTruck?node-id=52%3A1689'
        }
     }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof UserCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const exampleProps: UserCardProps = {
    first_name: 'Marilyn',
    last_name: 'Kenter',
    email: 'marilynkenter@gmail.com',
    city: 'San Francisco',
    dob: '01/16/1995',
    zip: '94016',
    state: 'CA'
};
Example.args = exampleProps;