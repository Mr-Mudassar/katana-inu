import Image from "next/image";
import HeroSection from "@/components/hero section/heroSection";
import Section2Main from "@/components/section2/section-2-main";
import Section3Main from "@/components/section3/section-3-main";

export default function Home() {
  return (
    <div className="py-2 px-3 lg:py-[32px] lg:px-[90px]">
      <HeroSection />
      <Section2Main />
      <Section3Main />
    </div>
  );
}
