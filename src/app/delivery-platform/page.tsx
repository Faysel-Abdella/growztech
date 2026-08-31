import Canonical from "@/seo/Canonical";
import DeliveryPlatformHero from "@/components/sections/delivery-platform/hero";
import EcosystemRoles from "@/components/sections/delivery-platform/ecosystem-roles";
import BusinessModels from "@/components/sections/delivery-platform/business-models";
import SmartMatchingSummary from "@/components/sections/delivery-platform/smart-matching-summary";
import ProductEcosystemSummary from "@/components/sections/delivery-platform/product-ecosystem-summary";
import WhyChoose from "@/components/sections/delivery-platform/why-choose";
import BuildVsBuy from "@/components/sections/delivery-platform/build-vs-buy";
import SuccessStories from "@/components/sections/delivery-platform/success-stories";
import Pricing from "@/components/sections/delivery-platform/pricing";
import DeliveryPlatformFaq from "@/components/sections/delivery-platform/faq";
import DeliveryPlatformFinalCta from "@/components/sections/delivery-platform/final-cta";

const DeliveryPlatformPage = () => {
  return (
    <div>
      <Canonical uid="delivery-platform" />
      <DeliveryPlatformHero />
      <EcosystemRoles />
      <BusinessModels />
      <SmartMatchingSummary />
      <ProductEcosystemSummary />
      <WhyChoose />
      <BuildVsBuy />
      <SuccessStories />
      <Pricing />
      <DeliveryPlatformFaq />
      <DeliveryPlatformFinalCta />
    </div>
  );
};

export default DeliveryPlatformPage;
