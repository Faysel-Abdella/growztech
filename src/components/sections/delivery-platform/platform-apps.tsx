import { cn } from "@/lib/utils";
import { platformApps } from "./data";
import { PhoneMockup, DashboardMockup } from "./mockups";

const PlatformApps = () => {
  return (
    <section className="w-full flex px-2.5">
      <div className="w-full max-w-6xl mx-auto py-14 md:py-20">
        {platformApps.map((app, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={app.slug}
              id={app.slug}
              data-aos="fade-up"
              data-aos-duration="700"
              className="scroll-mt-28 py-10 md:py-14 border-b border-border last:border-b-0"
            >
              <div
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-10 lg:gap-16",
                  reversed && "lg:flex-row-reverse"
                )}
              >
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <app.icon className="size-5" />
                    </div>
                    <p className="text-sm font-semibold font-inter uppercase tracking-wider text-primary">
                      {app.label}
                    </p>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold font-gilroy leading-tight">
                    {app.headline}
                  </h3>
                  <p className="text-description text-base md:text-lg font-inter leading-relaxed">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {app.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="rounded-full bg-muted px-3.5 py-1.5 text-sm font-inter text-foreground/90"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                  {app.mockup === "dashboard" ? (
                    <DashboardMockup label={app.label} icon={app.icon} className="w-full max-w-md" />
                  ) : (
                    <PhoneMockup label={app.label} icon={app.icon} className="max-w-[240px]" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlatformApps;
