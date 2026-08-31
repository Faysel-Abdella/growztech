"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, Truck } from "lucide-react";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { verticals } from "@/components/sections/delivery-platform/data";

export default function Products() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section
      id="products"
      className="flex flex-col gap-10 items-center justify-center w-screen h-fit py-7 md:py-10 lg:py-20 relative"
    >
      <div className="w-full md:max-w-[591px] lg:max-w-[711px] inline-flex flex-col justify-center items-center gap-4 md:gap-6 px-4">
        <SectionShow title="Products" />
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center md:mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy md:leading-[57.60px]"
        >
          One Platform. Multiple Delivery Businesses.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="self-stretch md:px-10 text-center text-description text-base md:text-lg font-normal font-inter leading-relaxed"
        >
          A complete white-label delivery platform for food, grocery, retail and on-demand
          delivery — launch your own branded delivery business.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="w-full max-w-[1212px] px-4"
      >
        <div className="flex w-full flex-col gap-4 md:gap-6 rounded-3xl md:rounded-4xl pt-6 border-[1px] border-[#E2E2E3] bg-background3">
          <div className="flex w-full px-6 gap-4 md:gap-6 items-center">
            <div className="flex bg-white size-fit p-3 rounded-[12px] items-center justify-center flex-shrink-0">
              <Truck className="size-7 text-primary" />
            </div>
            <p className="text-foreground text-2xl font-semibold font-gilroy flex-shrink">
              Delivery Platform
            </p>
          </div>
          <div className="flex flex-col gap-6 px-8 py-6 bg-white rounded-3xl md:rounded-4xl">
            <p className="text-md md:text-lg font-normal font-inter text-description">
              Launch your own delivery business without building the infrastructure from
              scratch — customer, merchant, rider and admin apps, smart delivery matching, and
              more, ready under your brand.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {verticals.map((vertical) => (
                <span
                  key={vertical.slug}
                  className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3.5 py-1.5 text-sm font-inter text-foreground/80"
                >
                  <vertical.icon className="size-3.5 text-primary" />
                  {vertical.navLabel}
                </span>
              ))}
            </div>
            <Button className="w-fit rounded-full !h-11 !px-6" asChild>
              <Link href="/delivery-platform">
                Explore the Delivery Platform
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
