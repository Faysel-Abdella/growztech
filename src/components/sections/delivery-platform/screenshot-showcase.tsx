import { Smartphone, Store, Bike, LayoutDashboard, type LucideIcon } from "lucide-react";
import SectionShow from "@/components/section-show";
import { screenshotGroups } from "./data";

const groupIcons: Record<string, LucideIcon> = {
  "Customer Experience": Smartphone,
  "Merchant Experience": Store,
  "Rider Experience": Bike,
  "Admin Experience": LayoutDashboard,
};

const ScreenshotShowcase = () => {
  return (
    <section className="flex w-screen px-1.5">
      <div className="flex max-w-7xl flex-col gap-12 px-4 mx-auto justify-center w-full h-fit pt-20 md:pt-28 pb-16 relative">
        <div className="flex-col gap-6 items-center flex text-center">
          <SectionShow title="Screenshot Showcase" />
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-2xl text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]"
          >
            See the Platform in Action
          </p>
        </div>

        <div data-aos="fade-up" data-aos-duration="700" className="flex flex-col gap-10 w-full">
          {screenshotGroups.map((group) => {
            const GroupIcon = groupIcons[group.label] ?? Smartphone;
            return (
              <div key={group.label} className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">
                  <GroupIcon className="size-5 text-primary" />
                  <p className="text-lg font-semibold font-gilroy">{group.label}</p>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {group.screens.map((screen) => (
                    <div
                      key={screen}
                      className={
                        "shrink-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-muted/50 " +
                        (group.mockup === "dashboard" ? "w-56 aspect-video" : "w-32 aspect-[9/16]")
                      }
                    >
                      <GroupIcon className="size-6 text-foreground/40" />
                      <p className="text-xs font-medium font-inter text-description text-center px-2">
                        {screen}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
