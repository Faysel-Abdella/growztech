import SectionShow from "@/components/section-show";
import FaqAccordionItem from "@/components/faq-accordion-item";
import { Accordion } from "@/components/ui/accordion";
import { deliveryFaqItems } from "./data";

const DeliveryPlatformFaq = () => {
  return (
    <section id="faq" className="px-4 py-16 md:py-28 bg-background2 overflow-hidden scroll-mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionShow
            title="FAQ"
            className="bg-[#F4F6FF]/10 text-white outline-[#565656]"
          />
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="mt-4 text-3xl font-extrabold font-gilroy text-background2-foreground md:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-4 text-base text-background2-description md:text-lg"
          >
            Everything you need to know about launching on the delivery platform.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="01" className="w-full space-y-3">
            {deliveryFaqItems.map((faq, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={`${(index % 6) * 100}`}
                key={faq.value}
              >
                <FaqAccordionItem faqItem={faq} />
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPlatformFaq;
