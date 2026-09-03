"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FilledIcons } from "@/components/ui/filled-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PhoneMockup, DashboardMockup } from "./mockups";

export default function DeliveryPlatformHero() {
  useEffect(() => {
    AOS.init({
      once: false,
      startEvent: "DOMContentLoaded",
      duration: 700,
      delay: 0,
      offset: 0,
    });
  }, []);

  return (
    <main
      className="w-screen relative bg-gradient-to-b from-background3 via-background3 to-white"
      id="delivery-platform-home"
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center
  bg-gradient-to-b from-transparent via-transparent to-white
  [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
      />
      <div className="relative w-full lg:max-w-6xl mx-auto flex-col pt-28 pb-10 px-6 lg:px-14 h-fit flex items-center justify-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="600"
          className="font-clashgrotesk flex flex-wrap font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center"
        >
          Launch Your Own Delivery Platform
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full flex flex-col gap-4 items-center justify-center mt-6"
        >
          <p className="text-sm sm:text-base text-center lg:max-w-[823px] text-description md:text-lg font-normal font-inter leading-normal md:leading-relaxed lg:w-[85%]">
            A complete white-label delivery solution for food, restaurants,
            groceries, supermarkets, retail and on-demand delivery — ready to
            launch under your brand.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="z-30 mt-8 md:mt-12 justify-start items-center gap-2 md:gap-5 flex max-md:flex-col max-md:w-full"
        >
          <Button
            className="rounded-full p-5 md:p-7 text-base font-semibold max-md:w-full"
            asChild
          >
            <Link href="/contact-us">Request a Demo</Link>
          </Button>
          <Button
            className="rounded-full p-5 md:p-7 text-base font-semibold border-primary max-md:w-full"
            variant="outline"
            asChild
          >
            <Link href="/delivery-platform/platform">Explore the Platform</Link>
          </Button>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="relative w-full flex flex-col items-center gap-8 pb-16 px-6"
      >
        <DashboardMockup
          label="Admin Dashboard"
          icon={FilledIcons.LayoutDashboard}
          className="w-full max-w-3xl"
        />
        <div className="flex flex-wrap items-start justify-center gap-6">
          <PhoneMockup
            label="Customer App"
            icon={FilledIcons.Smartphone}
            className="max-w-[150px]"
          />
          <PhoneMockup
            label="Merchant App"
            icon={FilledIcons.Store}
            className="max-w-[150px]"
          />
          <PhoneMockup
            label="Rider App"
            icon={FilledIcons.Bike}
            className="max-w-[150px]"
          />
        </div>
        <p className="text-sm font-inter text-description text-center">
          Customer App · Merchant App · Rider App · Admin Dashboard
        </p>
      </div>
    </main>
  );
}
