import SectionShow from "@/components/section-show";
import { cn } from "@/lib/utils";
import { orderJourneySteps } from "./data";

const OrderJourney = () => {
  return (
    <section className="flex w-screen px-1.5">
      <div className="flex max-w-7xl flex-col gap-12 px-4 mx-auto justify-center w-full h-fit pt-20 md:pt-28 pb-16 relative">
        <div className="flex-col gap-6 items-center flex text-center">
          <SectionShow title="Order Journey" className="bg-background3" />
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-2xl text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]"
          >
            From Order to Doorstep
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full grid md:grid-cols-7 flex-wrap gap-0 mx-auto justify-center items-center"
        >
          {orderJourneySteps.map((step) => (
            <div key={step.step} className="flex flex-col max-md:items-center">
              <div className="w-full flex items-center max-md:justify-center">
                <div className="size-12 shrink-0 rounded-full border-4 text-lg font-gilroy flex items-center justify-center font-semibold text-white border-background3 bg-primary">
                  {step.step}
                </div>
                <div
                  className={cn(
                    "h-px w-full border-y-2 border-dashed max-md:hidden",
                    step.step == orderJourneySteps.length && "border-0"
                  )}
                />
              </div>
              <div className="flex flex-col max-md:items-center md:pr-3 mt-4 md:mt-6">
                <p className="flex items-center text-base font-semibold font-gilroy">
                  {step.title}
                </p>
                <div className="mt-2 max-md:max-w-xs max-md:text-center max-md:mx-auto text-description text-sm font-inter">
                  {step.description}
                </div>
              </div>
              <div
                className={cn(
                  "h-16 w-px border-x-2 mt-2 border-dashed md:hidden",
                  step.step == orderJourneySteps.length && "h-0"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderJourney;
