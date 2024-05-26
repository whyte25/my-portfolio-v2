import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const config = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});
