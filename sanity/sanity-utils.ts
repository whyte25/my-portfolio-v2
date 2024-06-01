import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { config } from "./lib/client";
import {
  AboutTypes,
  ExperienceTypes,
  HeaderTypes,
  Projects,
  SocialLinks,
  StackTypes,
} from "../types";

export const getHeader = (): Promise<HeaderTypes[]> => {
  return config.fetch(
    groq`*[_type == 'header']{
      _id,
      _createdAt,
      name,
      subName,
      description,
      link,
      imageurl
    }`
  );
};

export const getAbout = (): Promise<AboutTypes[]> => {
  return config.fetch(
    groq`*[_type == 'about']{
      _id,
      _createdAt,
      description,
      imageurl
    }`
  );
};

export const getStack = (): Promise<StackTypes[]> => {
  return config.fetch(
    groq`*[_type == 'stack'] | order(_createdAt asc) {
      _id,
      _createdAt,
      name,
      imageurl
    }`
  );
};

export const getExperience = (): Promise<ExperienceTypes[]> => {
  return config.fetch(
    groq`*[_type == 'experience'] | order(_createdAt desc) {
      _id,
      _createdAt,
      company,
      position,
      timeFrame,
      tasks
    }`
  );
};

export const getProjects = (): Promise<Projects[]> => {
  return config.fetch(
    groq`*[_type == 'portfolio'] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      description,
      stacks,
      links,
      imageurl,
    }`
  );
};

export const getSocialLinks = (): Promise<SocialLinks[]> => {
  return config.fetch(
    groq`*[_type == 'socialLinks'] | order(_createdAt asc) {
      _id,
      _createdAt,
      link,
    }`
  );
};
