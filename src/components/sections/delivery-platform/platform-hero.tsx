import SectionShow from "@/components/section-show";

const PlatformHero = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-background3 via-background3 to-white flex flex-col items-center gap-6 pt-10 pb-14 px-6 text-center">
      <SectionShow title="Platform" className="bg-white" />
      <h1
        data-aos="fade-up"
        data-aos-duration="600"
        className="max-w-3xl font-clashgrotesk font-semibold text-3xl md:text-5xl lg:text-6xl"
      >
        Every Role. One Connected Platform.
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="700"
        className="max-w-2xl text-description text-base md:text-lg font-inter leading-relaxed"
      >
        Customer, merchant, rider and admin — four applications built to work together, with
        smart delivery matching connecting them all.
      </p>
    </div>
  );
};

export default PlatformHero;
