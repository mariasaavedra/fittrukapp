import { DefaultRootState } from "react-redux";

export interface ClassType {
  /** Modeled after the 'classes' table */
  abbreviated_date: string;
  abrv_end_time: string;
  abrv_start_time: string;
  city: string;
  classname: string;
  class_size: string;
  date: string;
  description: string;
  end_time: Date;
  id: number;
  start_time: Date;
  state: string;
  street: string;
  trainer_birth_year: string;
  trainer_first_name: string;
  trainer_image: string;
  trainer_last_name: string;
  trainer_pronouns: string;
  trainer_user_id: number;
  week_day_name: string;
}

export interface FTRootState extends DefaultRootState {
  myClasses: Array<ClassType>;
  allClasses: Array<ClassType>;
  attendees: Array<any>; // @TODO - add type.
  availableTrainers: any; // @TODO - add type.
  searchQuery?: any | { // @TODO - add type.
    searchTerm?: any;
  }
  selectedClass: any;
  errors: any; // @TODO - add type.
  user: {
    access_level: number;
    attendees: string | number;
    city: string;
    email: string;
    emergency_name: string;
    emergency_number: string;
    emergency_phone: string;
    first_name: string;
    id: string | number;
    last_name: string;
    phone_number: string;
    profile_image: string;
    pronouns: string;
    state: string;
    street: string;
    zip: string;
    dob: Date;
    password: string;
    username: string;
    checked_in: boolean;
  };
}
