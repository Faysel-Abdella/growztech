import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { verticals } from "./data";

const BusinessModels = () => {
  return (
    <section className="flex px-2.5">
      <div className="flex flex-col gap-12 px-4 items-center justify-center w-full h-fit pt-16 md:pt-20 pb-16 relative">
        <div className="max-w-[1212px] flex-col items-center gap-6 flex text-center">
          <SectionShow title="Business Models" />
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-2xl text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]"
          >
            One Platform. Multiple Delivery Models.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-2xl text-description font-inter leading-relaxed"
          >
            Start with the delivery business you need today and expand into new categories as
            your business grows.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full max-w-[1212px] grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mx-auto"
        >
          {verticals.map((vertical) => (
            <Link
              key={vertical.slug}
              href={`/delivery-platform/solutions#${vertical.slug}`}
              className="group w-full p-7 rounded-[32px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] outline-1 outline flex bg-white flex-col gap-10 justify-between outline-offset-[-0.5px] outline-neutral-200 transition-colors hover:outline-primary/40"
            >
              <vertical.icon className="size-9 text-primary" />
              <div className="flex flex-col gap-3">
                <p className="flex items-center justify-between text-xl font-semibold font-gilroy group-hover:underline">
                  {vertical.navLabel}
                  <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </p>
                <p className="text-description text-base font-inter leading-normal">
                  {vertical.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Button className="!h-12 !px-8 rounded-full" asChild>
          <Link href="/delivery-platform/solutions">Explore Solutions</Link>
        </Button>
      </div>
    </section>
  );
};

export default BusinessModels;
