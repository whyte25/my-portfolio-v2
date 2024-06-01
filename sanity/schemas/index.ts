import header from "./header";
import about from "./about";
import stack from "./stack";
import portfolio from "./portfolio";
import experience from "./experience";
import socialLinks from "./social-links";

import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, experience, portfolio, stack, about, socialLinks],
};
