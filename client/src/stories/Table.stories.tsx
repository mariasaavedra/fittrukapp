import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table, { TableProps } from "../components/Table/Table";
import Button from "../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Library/Components/Table",
  component: Table,
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
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

// Name example for the component state it represents i.e. Small for argTypes: {size: small}
export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const defaultColumns = [
  {
    id: "Class Name",
  },
  {
    id: "Class Type",
  },
  {
    id: "Price per Class",
  },
  {
    id: "Date & Time",
  },
  {
    id: "Address",
  },
  {
    id: "Workout Trainer",
    overwriteRender: (value) => {
      return (
        <div className={"columns-2"}>
          <img
            src={`${value.profile_photo}`}
            height={35}
            width={35}
            alt={`${value.first_name} ${value.last_name}`}
            className={"aspect-square rounded-full"}
          />
          <div>
            <p
              className={"font-bold"}
            >{`${value.first_name} ${value.last_name}`}</p>
            <p className={"font-light"}>{`${value.years} years`}</p>
          </div>
        </div>
      );
    },
  },
  {
    id: "Actions",
    overwriteRender: (value) => {
      return <div>{value}</div>;
    },
  },
];

const AMOUNT = 30;

const generateDatum = () => {
  const COURSE_NAME: number = Math.round(Math.random() * 6);
  const COURSE_TYPE: number = Math.round(Math.random() * 2);
  const STREET_NUM: number = Math.round(Math.random() * 3);
  const CITY: number = Math.round(Math.random() * 3);
  const YEARS: number = Math.round(Math.random() * 31);
  const MONTH_NUM: number = Math.round(Math.random() * 11 + 1);
  const DAY_NUM: number = Math.round(Math.random() * 27 + 1);
  return {
    "Class Name": `${
      COURSE_NAME === 6
        ? "Chest"
        : COURSE_NAME === 5
        ? "Leg"
        : COURSE_NAME === 4
        ? "Bi Shape"
        : COURSE_NAME === 3
        ? "Tri Shape"
        : COURSE_NAME === 2
        ? "Shoulder"
        : COURSE_NAME === 1
        ? "Back"
        : "Mixed"
    } Workout`,
    "Class Type": `${
      COURSE_TYPE === 2 ? "Expert" : COURSE_TYPE === 1 ? "Advanced" : "Beginner"
    }`,
    "Price per Class": `$${Math.round((Math.random() * 4 + 1.99) * 100) / 100}`,
    "Date & Time": `${DAY_NUM}/${MONTH_NUM}/2022, ${Math.round(
      Math.random() * 12
    )}:45${Math.round(Math.random()) === 1 ? "PM" : "AM"}`,
    Address: `${STREET_NUM === 2 ? "281" : STREET_NUM === 1 ? "6023" : "75"}, ${
      CITY === 2 ? "Navarre" : CITY === 1 ? "Orlando" : "Tampa"
    }, Florida, USA`,
    "Workout Trainer": {
      first_name: "Susan",
      last_name: "Doyle",
      profile_photo:
        "https://www.brisbaneheadshots.com.au/templates/yootheme/cache/Asian-headshots-linkedin-profile-brisbane-e0c9d83b.jpeg",
      email: "susan.d@yahoo.com",
      phone_number: "8160234567",
      street: "12, Bay area",
      city: "Bay area",
      state: "Florida",
      zip: "66210",
      dob: new Date(),
      pronouns: "she",
      emergency_name: "Bob Doyle",
      emergency_number: "8167523102",
      profile_image: "something",
      free_classes: "no",
      access_level: 1,
      years: YEARS,
    },
    Actions: <Button>Click Me</Button>,
  };
};
const defaultData = new Array(AMOUNT).fill(null).map(() => generateDatum());
// const defaultActions = new Array(AMOUNT).fill(<Button>Click Me</Button>);

const exampleProps: TableProps = {
  // Add props here
  columns: defaultColumns,
  data: defaultData,
};
Example.args = exampleProps;
