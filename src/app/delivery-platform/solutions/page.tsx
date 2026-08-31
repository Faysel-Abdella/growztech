import { Metadata } from "next";
import Canonical from "@/seo/Canonical";
import SolutionsContent from "@/components/sections/delivery-platform/solutions-content";
import DeliveryPlatformFinalCta from "@/components/sections/delivery-platform/final-cta";

export const metadata: Metadata = {
  title: "Delivery Platform Solutions | Food, Grocery, Retail & On-Demand",
  description:
    "Food delivery, grocery and supermarket, retail marketplace, and on-demand delivery — all on one white-label delivery platform.",
  alternates: {
    canonical: "https://www.venastechnology.com/delivery-platform/solutions",
  },
};

const SolutionsPage = () => {
  return (
    <div>
      <Canonical uid="delivery-platform/solutions" />
      <SolutionsContent />
      <DeliveryPlatformFinalCta />
    </div>
  );
};

export default SolutionsPage;
