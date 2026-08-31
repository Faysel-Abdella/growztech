import SectionShow from "@/components/section-show";
import { differentiators } from "./data";

const WhyChoose = () => {
  return (
    <section className="flex px-2.5">
      <div className="flex flex-col gap-12 px-4 items-center justify-center w-full h-fit py-16 md:py-20 relative">
        <div className="max-w-2xl flex-col items-center gap-6 flex text-center">
          <SectionShow title="Why Choose It" />
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]"
          >
            Built to Launch. Designed to Scale.
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="w-full max-w-[1212px] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mx-auto"
        >
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="w-full p-7 rounded-[32px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] outline-1 outline flex bg-white flex-col gap-10 justify-between outline-offset-[-0.5px] outline-neutral-200"
            >
              <item.icon className="size-9 text-primary" />
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="text-xl font-semibold font-gilroy">{item.title}</p>
                <p className="text-description text-base font-inter leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
