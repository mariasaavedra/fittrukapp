import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../styles/globals.css';
import ClassCard, { ClassCardProps } from '../components/ClassCard/ClassCard';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Library/Components/ClassCard',
    component: ClassCard,
     parameters: {
        design: {
           type: 'figma',
           url: 'https://www.figma.com/file/AyWKarq4WhziyvGaUvW7xx/FitTruck?node-id=161%3A39555'
        }
     }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof ClassCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClassCard> = (args) => <ClassCard {...args} />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const tomorrow = new Date("2023-08-21");
const defaultProps: ClassCardProps = {
    startTime: tomorrow,
    title: "Chest Workout",
    level: "Expert",
    location: "Kansas City, Missouri",
    price: "$1.99",
    seats: 20,
    attending: 10,
    coverUrl: "/../images/squares.svg"
};
Default.args = defaultProps;