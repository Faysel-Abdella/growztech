import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";

const caseStudy = {
  challenge:
    "Managing customers, restaurants, riders and administrators across a complete delivery ecosystem while efficiently handling growing order volumes.",
  solution:
    "A unified platform consisting of the customer application, restaurant application, rider application, admin dashboard, order management, delivery management, real-time tracking, and smart multi-order matching.",
  result:
    "Built and deployed as a complete, production-ready delivery ecosystem — covering ordering, merchant operations, rider dispatch, live tracking and smart multi-order matching in one platform.",
};

const SuccessStories = () => {
  return (
    <section className="flex w-screen overflow-hidden px-1.5 md:px-2.5">
      <div className="flex flex-col bg-muted gap-10 items-center rounded-t-[32px] px-2 lg:px-0 justify-center w-full h-fit py-16 relative">
        <div className="w-full max-w-2xl flex-col justify-start items-center gap-5 inline-flex relative text-center">
          <SectionShow title="Success Stories" className="bg-white" />
          <p className="self-stretch text-center text-foreground text-3xl md:text-5xl font-bold font-gilroy leading-[45px] md:leading-[60px]">
            Built for Real Delivery Operations
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full max-w-3xl bg-background rounded-[24px] border border-neutral-200 drop-shadow-md p-7 md:p-10 flex flex-col gap-8"
        >
          <p className="text-xs font-semibold font-inter tracking-wider text-primary uppercase">
            Multi-Order Delivery Platform
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-gilroy font-semibold text-lg mb-2">The Challenge</p>
              <p className="text-description font-inter leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <p className="font-gilroy font-semibold text-lg mb-2">The Solution</p>
              <p className="text-description font-inter leading-relaxed">{caseStudy.solution}</p>
            </div>
            <div>
              <p className="font-gilroy font-semibold text-lg mb-2">The Result</p>
              <p className="text-description font-inter leading-relaxed">{caseStudy.result}</p>
            </div>
          </div>

          <Button className="w-fit rounded-full !h-11 !px-6" variant="outline" asChild>
            <Link href="/contact-us">
              Read the Full Case Study
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
