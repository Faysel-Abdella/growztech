import { Metadata } from "next";
import Canonical from "@/seo/Canonical";
import PlatformHero from "@/components/sections/delivery-platform/platform-hero";
import PlatformApps from "@/components/sections/delivery-platform/platform-apps";
import SmartMatchingDetail from "@/components/sections/delivery-platform/smart-matching-detail";
import OrderJourney from "@/components/sections/delivery-platform/order-journey";
import FeaturesGrid from "@/components/sections/delivery-platform/features-grid";
import ScreenshotShowcase from "@/components/sections/delivery-platform/screenshot-showcase";
import Integrations from "@/components/sections/delivery-platform/integrations";
import DeliveryPlatformFinalCta from "@/components/sections/delivery-platform/final-cta";

export const metadata: Metadata = {
  title: "Delivery Platform | Customer, Merchant, Rider & Admin Apps",
  description:
    "See the full delivery platform: customer, merchant, rider and admin apps, smart multi-order matching, the order journey, features and integrations.",
  alternates: {
    canonical: "https://www.venastechnology.com/delivery-platform/platform",
  },
};

const PlatformPage = () => {
  return (
    <div>
      <Canonical uid="delivery-platform/platform" />
      <PlatformHero />
      <PlatformApps />
      <SmartMatchingDetail />
      <OrderJourney />
      <FeaturesGrid />
      <ScreenshotShowcase />
      <Integrations />
      <DeliveryPlatformFinalCta />
    </div>
  );
};

export default PlatformPage;
