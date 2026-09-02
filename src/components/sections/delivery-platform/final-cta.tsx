import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeliveryPlatformFinalCta = () => {
  return (
    <section className="w-screen flex items-center justify-center mx-auto bg-background2 py-24">
      <div className="flex flex-col items-center text-center px-4 mx-auto lg:w-[1000px] gap-6">
        <h2 className="max-w-2xl justify-start text-white text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-12 md:leading-[57.6px]">
          Ready to Launch Your Delivery Business?
        </h2>
        <p className="max-w-2xl text-background2-description text-base md:text-lg font-inter leading-relaxed">
          Start with food. Expand into groceries, supermarkets, retail and on-demand delivery as
          your business grows.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center mt-2">
          <Button className="!h-12 !px-8 rounded-full w-fit" asChild>
            <Link href="/contact-us">
              Request a Demo
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button
            className="!h-12 !px-8 rounded-full w-fit border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
            variant="outline"
            asChild
          >
            <Link href="/delivery-platform/pricing">Get Pricing</Link>
          </Button>
        </div>
        <p className="max-w-xl text-background2-description text-sm font-inter leading-relaxed mt-2">
          Tell us about your business and we&apos;ll show you how the platform can fit your
          operation.
        </p>
      </div>
    </section>
  );
};

export default DeliveryPlatformFinalCta;
