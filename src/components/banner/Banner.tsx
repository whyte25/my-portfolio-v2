import { getHeader } from "../../../sanity/sanity-utils";
import { BannerItem } from "./BannerItem";

export default async function Banner() {
  const header = await getHeader();
  return (
    <section id="home" className="banner">
      <BannerItem header={header} />
    </section>
  );
}
