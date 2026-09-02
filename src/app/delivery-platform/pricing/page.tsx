import { Metadata } from "next";
import Canonical from "@/seo/Canonical";
import PricingContent from "@/components/sections/delivery-platform/pricing-content";
import DeliveryPlatformFinalCta from "@/components/sections/delivery-platform/final-cta";

export const metadata: Metadata = {
  title: "Delivery Platform Pricing | Plans & Transparency",
  description:
    "Simple, transparent pricing for the white-label delivery platform. Compare Starter, Growth and Enterprise plans and see exactly what's included.",
  alternates: {
    canonical: "https://www.venastechnology.com/delivery-platform/pricing",
  },
};

const PricingPage = () => {
  return (
    <div>
      <Canonical uid="delivery-platform/pricing" />
      <PricingContent />
      <DeliveryPlatformFinalCta />
    </div>
  );
};

export default PricingPage;
