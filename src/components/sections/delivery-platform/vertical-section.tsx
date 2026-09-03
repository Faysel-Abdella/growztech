import Link from "next/link";
import { FilledIcons } from "@/components/ui/filled-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Vertical } from "./data";
import { PhoneMockup } from "./mockups";

interface VerticalSectionProps {
  vertical: Vertical;
  index: number;
}

const VerticalSection = ({ vertical, index }: VerticalSectionProps) => {
  const reversed = index % 2 === 1;

  return (
    <section
      id={vertical.slug}
      className="w-full flex px-2.5 scroll-mt-28"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div className="w-full max-w-6xl mx-auto py-14 md:py-20 px-4 md:px-6 border-b border-border last:border-b-0">
        <div
          className={cn(
            "flex flex-col lg:flex-row items-center gap-10 lg:gap-16",
            reversed && "lg:flex-row-reverse"
          )}
        >
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <vertical.icon className="size-5" />
              </div>
              <p className="text-sm font-semibold font-inter uppercase tracking-wider text-primary">
                {vertical.navLabel}
              </p>
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold font-gilroy leading-tight">
              {vertical.headline}
            </h3>
            <p className="text-description text-base md:text-lg font-inter leading-relaxed">
              {vertical.description}
            </p>

            {vertical.features && (
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {vertical.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm font-inter">
                    <FilledIcons.Check className="size-4 shrink-0 mt-0.5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {vertical.flow && (
              <div className="flex flex-wrap items-center gap-2">
                {vertical.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-sm font-inter font-medium">
                      {step}
                    </span>
                    {i < vertical.flow!.length - 1 && (
                      <FilledIcons.ArrowRight className="size-4 text-description shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {vertical.useCases && (
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold font-inter text-foreground">
                  Example use cases
                </p>
                <div className="flex flex-wrap gap-2">
                  {vertical.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-full bg-muted px-3.5 py-1.5 text-sm font-inter text-description"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button className="w-fit rounded-full !h-11 !px-6 mt-2 self-center lg:self-start" asChild>
              <Link href="/contact-us">Request a Demo</Link>
            </Button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <PhoneMockup label={vertical.navLabel} icon={vertical.icon} className="max-w-[240px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalSection;
