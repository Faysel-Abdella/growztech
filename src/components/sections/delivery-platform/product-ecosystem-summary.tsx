import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { platformApps } from "./data";
import { PhoneMockup, DashboardMockup } from "./mockups";

const ProductEcosystemSummary = () => {
  return (
    <section className="flex w-screen px-1.5">
      <div className="flex max-w-7xl flex-col gap-12 px-4 mx-auto justify-center w-full h-fit pt-20 md:pt-28 pb-16 relative">
        <div className="flex-col gap-6 items-center flex text-center">
          <SectionShow title="Product Ecosystem" />
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-2xl text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]"
          >
            Every Role. One Connected Platform.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-2xl text-description text-md md:text-lg font-normal font-inter leading-relaxed"
          >
            A customer app, merchant app, rider app and admin dashboard, all working together on
            one platform — order, operate, deliver and manage from a single ecosystem.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="700" className="w-full flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-start justify-center gap-6">
            {platformApps
              .filter((app) => app.mockup === "phone")
              .map((app) => (
                <PhoneMockup key={app.slug} label={app.label} icon={app.icon} className="max-w-[150px]" />
              ))}
          </div>
          <DashboardMockup label="Admin Dashboard" icon={LayoutDashboard} className="w-full max-w-2xl" />
        </div>

        <div className="flex justify-center w-full">
          <Button className="!h-12 rounded-full px-8" asChild>
            <Link href="/delivery-platform/platform">See Full Capabilities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystemSummary;
