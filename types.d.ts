import { Image } from "sanity";

interface HeaderTypes {
  _id: string;
  _createdAt: Date;
  name: string;
  subName: string;
  description: string;
  link: string;
  imageurl: {
    asset: Image;
  };
}

interface AboutTypes {
  _id: string;
  _createdAt: Date;
  description: string;
  imageurl: {
    asset: Image;
  };
}

interface StackTypes {
  _id: string;
  _createdAt: Date;
  name: string;
  imageurl: {
    asset: Image;
  };
}

interface ExperienceTypes {
  company: string;
  position: string;
  timeFrame: string;
  tasks: string[];
}

interface StackItem {
  _key: string;
  imageurl: {
    asset: Image;
  };
  name: string;
}

interface Link {
  _key: string;
  href: string;
  website: string;
  imageurl: {
    asset: Image;
  };
}

interface Projects {
  _id: string;
  name: string;
  description: string;
  imageurl: {
    asset: Image;
  };
  stacks: StackItem[];
  links: Link[];
}
