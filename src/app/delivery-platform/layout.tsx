import { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import DeliveryPlatformSectionNav from "@/components/sections/delivery-platform/section-nav";

export const metadata: Metadata = {
  title: "White-Label Delivery Platform | Launch Your Own Delivery Business",
  description:
    "A complete white-label delivery platform for food, grocery, retail and on-demand delivery. Launch your own branded delivery business with customer, merchant, rider and admin apps built in.",
  keywords: [
    "white-label delivery platform",
    "delivery app development",
    "food delivery software",
    "grocery delivery platform",
    "on-demand delivery app",
    "multi-vendor delivery marketplace",
    "delivery management system",
    "rider app development",
    "delivery business software",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.venastechnology.com/delivery-platform",
  },
  openGraph: {
    title: "White-Label Delivery Platform | Launch Your Own Delivery Business",
    description:
      "Launch your own branded delivery business — food, grocery, retail and on-demand — on a complete platform with customer, merchant, rider and admin apps built in.",
    url: "https://www.venastechnology.com/delivery-platform",
    type: "website",
    images: [
      {
        url: "https://www.venastechnology.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Venas Technologies Delivery Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label Delivery Platform | Launch Your Own Delivery Business",
    description:
      "Launch your own branded delivery business — food, grocery, retail and on-demand — on a complete platform with customer, merchant, rider and admin apps built in.",
    images: ["https://www.venastechnology.com/media-preview.png"],
  },
};

const DeliveryPlatformLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ScrollToTop />
      <DeliveryPlatformSectionNav />
      {children}
    </>
  );
};

export default DeliveryPlatformLayout;
