import Link from "next/link";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { smartMatchingBenefits } from "./data";

const SmartMatchingSummary = () => {
  return (
    <section className="px-2.5">
      <div className="py-20 bg-muted rounded-4xl">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionShow title="Smart Delivery Matching" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              Smarter Delivery Matching
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="mt-4 text-lg font-semibold font-gilroy text-foreground"
            >
              Turn compatible orders into more efficient delivery runs.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="mt-4 text-base text-center text-description md:text-lg"
            >
              The platform intelligently identifies compatible orders and delivery assignments
              based on factors such as pickup locations, delivery destinations, timing and rider
              availability.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {smartMatchingBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col px-6 pb-6 pt-7 bg-background w-full drop-shadow-md gap-8 rounded-2xl md:rounded-3xl border"
              >
                <benefit.icon className="size-10 text-primary" />
                <div className="flex flex-col gap-3">
                  <p className="text-foreground text-xl font-semibold font-gilroy">
                    {benefit.title}
                  </p>
                  <p className="text-base font-normal font-inter text-description">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full items-center justify-center mt-14 flex">
            <Button className="!h-12 !px-8 rounded-full" variant="outline" asChild>
              <Link href="/delivery-platform/platform#smart-matching">See How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMatchingSummary;
