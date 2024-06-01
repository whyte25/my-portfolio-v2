import About from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <div test-id="home-page">
      <Banner />
      <div className="wrapper-container">
        <About />
      </div>
      <Contact />
    </div>
  );
}
