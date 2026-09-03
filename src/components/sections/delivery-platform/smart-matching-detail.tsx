import { FilledIcons } from "@/components/ui/filled-icons";
import SectionShow from "@/components/section-show";
import { smartMatchingBenefits } from "./data";

const orders = ["Order A", "Order B", "Order C"];
const customers = ["Customer A", "Customer B", "Customer C"];

const SmartMatchingDetail = () => {
  return (
    <section id="smart-matching" className="px-2.5 scroll-mt-24">
      <div className="py-20 bg-muted rounded-4xl">
        <div className="container mx-auto max-w-6xl px-4">
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
            className="mt-16 w-full rounded-3xl bg-white border border-border p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-3">
              <div className="flex md:flex-col gap-3">
                {orders.map((order) => (
                  <span
                    key={order}
                    className="rounded-full bg-muted px-4 py-2 text-sm font-inter font-medium text-center"
                  >
                    {order}
                  </span>
                ))}
              </div>

              <FilledIcons.ArrowRight className="size-6 text-description shrink-0 rotate-90 md:rotate-0" />

              <div className="flex flex-col items-center gap-2 rounded-2xl bg-primary/10 px-6 py-5">
                <FilledIcons.Route className="size-8 text-primary" />
                <p className="text-sm font-semibold font-inter text-primary text-center">
                  Smart Matching
                </p>
              </div>

              <FilledIcons.ArrowRight className="size-6 text-description shrink-0 rotate-90 md:rotate-0" />

              <div className="flex flex-col items-center gap-2 rounded-2xl bg-muted px-6 py-5">
                <FilledIcons.Bike className="size-7 text-foreground" />
                <p className="text-sm font-semibold font-inter text-center">Rider</p>
              </div>

              <FilledIcons.ArrowRight className="size-6 text-description shrink-0 rotate-90 md:rotate-0" />

              <div className="flex md:flex-col gap-3">
                {customers.map((customer) => (
                  <span
                    key={customer}
                    className="inline-flex items-center gap-1.5 rounded-full bg-muted px-4 py-2 text-sm font-inter font-medium"
                  >
                    <FilledIcons.User className="size-3.5" />
                    {customer}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
        </div>
      </div>
    </section>
  );
};

export default SmartMatchingDetail;
