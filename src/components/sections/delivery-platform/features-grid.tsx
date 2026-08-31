import SectionShow from "@/components/section-show";
import { featureCategories } from "./data";

const FeaturesGrid = () => {
  return (
    <section className="px-2.5">
      <div className="py-20 bg-muted rounded-4xl">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionShow title="Features" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              Everything Your Delivery Business Needs
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="grid mt-16 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {featureCategories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col gap-5 p-7 rounded-[32px] bg-background border border-neutral-200 drop-shadow-md"
              >
                <p className="text-xl font-semibold font-gilroy">{category.title}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-muted px-3.5 py-1.5 text-sm font-inter text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
