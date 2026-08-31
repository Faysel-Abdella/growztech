import SectionShow from "@/components/section-show";
import { integrationCategories } from "./data";

const Integrations = () => {
  return (
    <section className="px-2.5">
      <div className="py-20 bg-muted rounded-4xl">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <SectionShow title="Integrations" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              Connect the Tools You Already Use
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="grid mt-14 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {integrationCategories.map((integration) => (
              <div
                key={integration.title}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-background border border-neutral-200 p-6 text-center"
              >
                <integration.icon className="size-8 text-primary" />
                <p className="text-sm font-semibold font-inter">{integration.title}</p>
              </div>
            ))}
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-10 text-center text-description text-base font-inter leading-relaxed max-w-xl mx-auto"
          >
            Need an integration that isn&apos;t available yet? Our platform can be extended to fit
            your business requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
