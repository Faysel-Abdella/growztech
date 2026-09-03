import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionShow from "@/components/section-show";
import { verticals } from "./data";
import SolutionsNav from "./solutions-nav";
import VerticalSection from "./vertical-section";

const SolutionsContent = () => {
  return (
    <main className="w-screen bg-white">
      <div className="flex flex-col items-center gap-8 pt-10 pb-10 px-6 text-center">
        <SectionShow title="Solutions" />
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          className="max-w-3xl font-clashgrotesk font-semibold text-3xl md:text-5xl lg:text-6xl"
        >
          One Platform. Multiple Delivery Models.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="max-w-2xl text-description text-base md:text-lg font-inter leading-relaxed"
        >
          Food, grocery and supermarket, retail marketplace, and on-demand delivery — each vertical
          follows the same shape: headline, capabilities and a way to get started.
        </p>
        <SolutionsNav />
        <Link
          href="/delivery-platform"
          className="inline-flex items-center gap-1.5 text-sm font-inter text-description hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to Overview
        </Link>
      </div>

      <div className="flex flex-col">
        {verticals.map((vertical, index) => (
          <VerticalSection key={vertical.slug} vertical={vertical} index={index} />
        ))}
      </div>
    </main>
  );
};

export default SolutionsContent;
