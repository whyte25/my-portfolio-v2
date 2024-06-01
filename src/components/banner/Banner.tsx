import { getHeader } from "../../../sanity/sanity-utils";
import { BannerItem } from "./BannerItem";

export default async function Banner() {
  const header = await getHeader();
  return (
    <section id="home" className="banner ">
      <div className="4k:max-w-8xl mx-auto">
        <BannerItem header={header} />
      </div>
    </section>
  );
}
