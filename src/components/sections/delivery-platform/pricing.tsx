import Link from "next/link";
import { Check } from "lucide-react";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingPlans } from "./data";

const transparencyItems = [
  "Platform (license)",
  "Setup & Deployment",
  "Integrations",
  "Custom Development",
  "Maintenance & Support",
];

const Pricing = () => {
  return (
    <section id="pricing" className="flex px-2.5 scroll-mt-24">
      <div className="flex flex-col gap-12 px-4 items-center justify-center w-full h-fit py-16 md:py-20 relative">
        <div className="max-w-2xl flex-col items-center gap-6 flex text-center">
          <SectionShow title="Pricing" />
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]"
          >
            Simple, Transparent Plans
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full max-w-6xl grid md:grid-cols-3 gap-6 items-stretch"
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col gap-6 rounded-[32px] border p-8 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]",
                plan.featured ? "border-primary ring-1 ring-primary" : "border-neutral-200"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1 text-xs font-semibold font-inter text-primary-foreground">
                  Most Popular
                </span>
              )}
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold font-gilroy uppercase">{plan.name}</p>
                <p className="text-primary font-inter font-medium">{plan.tagline}</p>
              </div>
              <p className="text-description font-inter leading-relaxed min-h-12">
                {plan.description}
              </p>
              <ul className="flex flex-col gap-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-inter">
                    <Check className="size-4 shrink-0 mt-0.5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4 pt-4">
                <p className="text-xl font-bold font-gilroy">{plan.price}</p>
                <Button
                  className="w-full rounded-full !h-11"
                  variant={plan.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.ctaHref}>{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full max-w-4xl rounded-3xl bg-muted p-7 md:p-9 flex flex-col gap-5"
        >
          <p className="font-gilroy font-semibold text-lg">Pricing Transparency</p>
          <p className="text-description font-inter leading-relaxed">
            Every plan clearly separates what&apos;s included so you know exactly what you&apos;re
            paying for:
          </p>
          <div className="flex flex-wrap gap-3">
            {transparencyItems.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white border border-border px-4 py-1.5 text-sm font-inter"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-description font-inter leading-relaxed text-sm">
            We don&apos;t assume every service is included in the base price. Licensing terms —
            including source code access, white-label rights, number of applications, hosting,
            updates, support and customization — are confirmed with you before you commit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
