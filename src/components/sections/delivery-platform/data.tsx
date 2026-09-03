import { FilledIcons } from "@/components/ui/filled-icons";
import type { FaqItem } from "@/types/shared.types";
import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type Vertical = {
  slug: string;
  navLabel: string;
  summary: string;
  headline: string;
  description: string;
  features?: string[];
  flow?: string[];
  useCases?: string[];
  icon: IconComponent;
};

export const verticals: Vertical[] = [
  {
    slug: "food-delivery",
    navLabel: "Food Delivery",
    summary:
      "Connect customers with restaurants and manage the entire ordering and delivery experience.",
    headline: "Launch Your Own Food Delivery Marketplace",
    description:
      "Connect customers with restaurants and manage the entire ordering and delivery experience.",
    features: [
      "Restaurant discovery",
      "Menus",
      "Cart and checkout",
      "Order management",
      "Restaurant operations",
      "Rider dispatch",
      "Live tracking",
      "Ratings and reviews",
    ],
    icon: FilledIcons.Utensils,
  },
  {
    slug: "grocery-supermarket",
    navLabel: "Grocery & Supermarket",
    summary:
      "Enable customers to browse products, build carts and receive groceries at their door.",
    headline: "Bring Grocery Shopping Online",
    description:
      "Enable customers to browse products, build carts and receive groceries directly at their door.",
    features: [
      "Product catalog",
      "Categories",
      "Search",
      "Product management",
      "Store management",
      "Orders",
      "Delivery scheduling",
      "Rider delivery",
      "Promotions",
    ],
    icon: FilledIcons.ShoppingCart,
  },
  {
    slug: "retail-marketplace",
    navLabel: "Retail Marketplace",
    summary:
      "Turn local stores and retailers into an online marketplace with integrated ordering and delivery.",
    headline: "Connect Local Businesses With Customers",
    description:
      "Turn local stores and retailers into an online marketplace with integrated ordering and delivery.",
    features: [
      "Multiple merchants",
      "Product catalogs",
      "Store profiles",
      "Orders",
      "Payments",
      "Promotions",
      "Delivery management",
    ],
    icon: FilledIcons.Store,
  },
  {
    slug: "on-demand-delivery",
    navLabel: "On-Demand Delivery",
    summary:
      "Let customers request delivery between any pickup and drop-off location.",
    headline: "Deliver Items From Anywhere to Anywhere",
    description:
      "Allow customers to request delivery without selecting a restaurant or store.",
    flow: [
      "Pickup Location",
      "Drop-off Location",
      "Item Details",
      "Delivery Request",
      "Rider Assignment",
      "Live Tracking",
      "Delivered",
    ],
    useCases: [
      "Packages",
      "Documents",
      "Personal items",
      "Business deliveries",
      "Local store deliveries",
      "Courier services",
    ],
    icon: FilledIcons.MapPinned,
  },
];

export type PlatformApp = {
  slug: string;
  label: string;
  headline: string;
  description: string;
  capabilities: string[];
  icon: IconComponent;
  mockup: "phone" | "dashboard";
};

export const platformApps: PlatformApp[] = [
  {
    slug: "customer-app",
    label: "Customer App",
    headline: "A Better Ordering Experience",
    description: "Order, pay and track deliveries.",
    capabilities: [
      "Discover restaurants and stores",
      "Browse menus and products",
      "Search and filter",
      "Manage addresses",
      "Add items to cart",
      "Place orders",
      "Make payments",
      "Track deliveries",
      "Contact delivery partners",
      "View order history",
      "Rate orders",
      "Reorder",
      "Receive notifications",
    ],
    icon: FilledIcons.Smartphone,
    mockup: "phone",
  },
  {
    slug: "merchant-app",
    label: "Merchant App",
    headline: "Everything Merchants Need to Manage Orders",
    description: "Manage products, orders and business operations.",
    capabilities: [
      "Manage profiles",
      "Manage menus / products",
      "Create categories",
      "Manage pricing",
      "Receive orders",
      "Accept / reject orders",
      "Set preparation time",
      "Update order status",
      "View order history",
      "View earnings",
      "Manage promotions",
    ],
    icon: FilledIcons.Store,
    mockup: "phone",
  },
  {
    slug: "rider-app",
    label: "Rider App",
    headline: "Give Riders Everything They Need",
    description: "Receive deliveries, navigate and complete orders.",
    capabilities: [
      "Manage availability",
      "Receive delivery assignments",
      "View pickup and drop-off locations",
      "Navigate",
      "Manage multiple deliveries",
      "Update delivery status",
      "Contact customers",
      "View earnings",
      "View delivery history",
    ],
    icon: FilledIcons.Bike,
    mockup: "phone",
  },
  {
    slug: "admin-dashboard",
    label: "Admin Dashboard",
    headline: "Complete Control From One Dashboard",
    description: "Control the entire platform from one dashboard.",
    capabilities: [
      "Customers",
      "Restaurants",
      "Stores",
      "Products",
      "Riders",
      "Orders",
      "Deliveries",
      "Delivery zones",
      "Pricing",
      "Commissions",
      "Promotions",
      "Payments",
      "Payouts",
      "Notifications",
      "Reports",
      "Analytics",
    ],
    icon: FilledIcons.LayoutDashboard,
    mockup: "dashboard",
  },
];

export const smartMatchingBenefits = [
  {
    title: "Better Rider Utilization",
    description: "Make better use of available delivery capacity.",
    icon: FilledIcons.Gauge,
  },
  {
    title: "More Efficient Deliveries",
    description: "Combine compatible deliveries when appropriate.",
    icon: FilledIcons.Route,
  },
  {
    title: "Fewer Unnecessary Trips",
    description: "Reduce redundant delivery journeys.",
    icon: FilledIcons.Layers,
  },
  {
    title: "Scale With Demand",
    description:
      "Support higher order volumes without relying only on adding more riders.",
    icon: FilledIcons.BarChart3,
  },
];

export const differentiators = [
  {
    title: "Ready-to-Launch",
    description:
      "Start with an established delivery foundation instead of building every component from scratch.",
    icon: FilledIcons.Sparkles,
  },
  {
    title: "Multi-Vertical",
    description:
      "Food, grocery, supermarket, retail and on-demand delivery from one platform.",
    icon: FilledIcons.Layers,
  },
  {
    title: "Smart Delivery Operations",
    description:
      "Intelligent order matching and delivery assignment help improve fleet utilization.",
    icon: FilledIcons.Route,
  },
  {
    title: "Complete Ecosystem",
    description:
      "Customer, merchant, rider and admin applications work together.",
    icon: FilledIcons.Users,
  },
  {
    title: "Customizable",
    description:
      "Adapt branding, business rules, integrations and workflows to your operation.",
    icon: FilledIcons.Settings,
  },
];

export const buildVsBuyIncluded = [
  "Customer App",
  "Merchant App",
  "Rider App",
  "Admin Dashboard",
  "Order Management",
  "Delivery Management",
  "Live Tracking",
  "Smart Delivery Matching",
  "Marketplace",
];

export const buildVsBuyExtra: {
  label: string;
  build: string;
  platform: string;
}[] = [
  {
    label: "Testing",
    build: "Your responsibility",
    platform: "Existing foundation",
  },
  {
    label: "Deployment",
    build: "Build infrastructure",
    platform: "Deployment-ready",
  },
  {
    label: "Future Expansion",
    build: "Additional development",
    platform: "Multi-vertical",
  },
];

export type PricingPlan = {
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  price: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "Food Delivery",
    description: "For businesses launching a food delivery marketplace.",
    includes: [
      "Customer App, Merchant App, Rider App, Admin Dashboard",
      "Restaurant management",
      "Order management",
      "Delivery management",
      "Live tracking",
      "Smart delivery matching",
      "Basic analytics",
    ],
    price: "Starting at $X",
    cta: "Get Started",
    ctaHref: "/contact-us",
  },
  {
    name: "Growth",
    tagline: "Food + Grocery",
    description: "For businesses expanding beyond food.",
    includes: [
      "Everything in Starter",
      "Grocery / store management",
      "Product catalog",
      "Multiple business categories",
      "Promotions",
      "Advanced analytics",
      "Multiple delivery zones",
      "Additional configuration",
    ],
    price: "Starting at $X",
    cta: "Get Started",
    ctaHref: "/contact-us",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Complete Delivery Platform",
    description: "For businesses requiring the complete ecosystem.",
    includes: [
      "Everything in Growth",
      "Food, grocery, supermarket, retail, on-demand delivery",
      "Advanced administration",
      "API integrations",
      "Custom workflows",
      "Multi-city operation",
      "Dedicated infrastructure options",
      "Priority support",
      "Custom development",
    ],
    price: "Let's Talk",
    cta: "Contact Sales",
    ctaHref: "/contact-us",
  },
];

export const featureCategories: { title: string; items: string[] }[] = [
  {
    title: "Customer Experience",
    items: [
      "Restaurant / store discovery",
      "Search",
      "Filters",
      "Product / menu browsing",
      "Cart",
      "Checkout",
      "Address management",
      "Order history",
      "Reordering",
      "Ratings",
      "Notifications",
      "Live tracking",
    ],
  },
  {
    title: "Merchant Operations",
    items: [
      "Merchant registration",
      "Store management",
      "Menu management",
      "Product management",
      "Categories",
      "Pricing",
      "Order management",
      "Preparation time",
      "Promotions",
      "Earnings",
    ],
  },
  {
    title: "Delivery Operations",
    items: [
      "Rider management",
      "Rider availability",
      "Delivery assignment",
      "Smart multi-order matching",
      "Multi-stop delivery",
      "Pickup / drop-off management",
      "Navigation",
      "Live delivery tracking",
      "Delivery history",
    ],
  },
  {
    title: "Administration",
    items: [
      "Customer management",
      "Merchant management",
      "Rider management",
      "Order management",
      "Delivery zones",
      "Commission management",
      "Pricing",
      "Promotions",
      "Payments",
      "Payouts",
      "Analytics",
      "Reports",
      "Notifications",
    ],
  },
];

export const integrationCategories: { title: string; icon: IconComponent }[] = [
  { title: "Payment Gateways", icon: FilledIcons.CreditCard },
  { title: "Maps & Navigation", icon: FilledIcons.MapPin },
  { title: "SMS", icon: FilledIcons.MessageSquareText },
  { title: "Push Notifications", icon: FilledIcons.Bell },
  { title: "Analytics", icon: FilledIcons.BarChart3 },
  { title: "Cloud Infrastructure", icon: FilledIcons.Cloud },
  { title: "POS Systems", icon: FilledIcons.ClipboardList },
  { title: "External APIs", icon: FilledIcons.Plug },
];

export const orderJourneySteps: {
  step: number;
  title: string;
  description: string;
}[] = [
  {
    step: 1,
    title: "Customer Orders",
    description: "A customer places an order from the app or web experience.",
  },
  {
    step: 2,
    title: "Merchant Receives",
    description: "The restaurant or store receives and accepts the order.",
  },
  {
    step: 3,
    title: "Rider Assignment",
    description: "An available rider is identified for pickup and delivery.",
  },
  {
    step: 4,
    title: "Smart Matching",
    description:
      "Compatible orders are grouped when appropriate for a more efficient run.",
  },
  {
    step: 5,
    title: "Pickup",
    description: "The rider collects the order from the merchant.",
  },
  {
    step: 6,
    title: "Live Tracking",
    description: "The customer follows the delivery in real time.",
  },
  {
    step: 7,
    title: "Delivery",
    description: "The order is completed at the customer's door.",
  },
];

export const screenshotGroups: {
  label: string;
  screens: string[];
  mockup: "phone" | "dashboard";
}[] = [
  {
    label: "Customer Experience",
    screens: [
      "Home",
      "Restaurant / Store",
      "Product / Menu",
      "Cart",
      "Checkout",
      "Order Tracking",
    ],
    mockup: "phone",
  },
  {
    label: "Merchant Experience",
    screens: [
      "Dashboard",
      "Orders",
      "Menu / Products",
      "Order Details",
      "Earnings",
    ],
    mockup: "phone",
  },
  {
    label: "Rider Experience",
    screens: [
      "Available Orders",
      "Active Delivery",
      "Multiple Deliveries",
      "Navigation",
      "Delivery Completion",
    ],
    mockup: "phone",
  },
  {
    label: "Admin Experience",
    screens: [
      "Dashboard",
      "Orders",
      "Merchants",
      "Riders",
      "Analytics",
      "Delivery Management",
    ],
    mockup: "dashboard",
  },
];

export const deliveryFaqItems: FaqItem[] = [
  {
    value: "01",
    question: "Is this a white-label platform?",
    answer: (
      <p className="leading-relaxed">
        Yes. The platform is built to launch under your own brand, from the
        customer, merchant and rider apps to the admin dashboard.
      </p>
    ),
  },
  {
    value: "02",
    question: "Can I use it for food delivery?",
    answer: (
      <p className="leading-relaxed">
        Yes. Food delivery is the primary entry point, connecting customers with
        restaurants and managing the entire ordering and delivery experience out
        of the box.
      </p>
    ),
  },
  {
    value: "03",
    question: "Can I add grocery and supermarkets later?",
    answer: (
      <p className="leading-relaxed">
        Yes. The platform is multi-vertical from day one, so you can expand into
        grocery and supermarket delivery as your business grows, without
        switching systems.
      </p>
    ),
  },
  {
    value: "04",
    question: "Can customers request custom deliveries?",
    answer: (
      <p className="leading-relaxed">
        Yes — customers can specify pickup and drop-off locations for supported
        delivery use cases, such as packages, documents and local store
        deliveries.
      </p>
    ),
  },
  {
    value: "05",
    question: "Does the platform support multiple deliveries per rider?",
    answer: (
      <p className="leading-relaxed">
        Yes. Smart multi-order matching identifies compatible orders and
        delivery assignments based on pickup locations, delivery destinations,
        timing and rider availability, so a single rider can efficiently handle
        more than one delivery.
      </p>
    ),
  },
  {
    value: "06",
    question: "Do customers, merchants and riders get a mobile app?",
    answer: (
      <p className="leading-relaxed">
        Yes. Each role has its own dedicated app: customers order and track
        deliveries, merchants manage products and orders, and riders manage
        assignments and navigation.
      </p>
    ),
  },
  {
    value: "08",
    question: "Do I get an admin dashboard?",
    answer: (
      <p className="leading-relaxed">
        Yes. A web-based admin dashboard gives you complete control over
        customers, merchants, riders, orders, deliveries, pricing, promotions
        and reporting.
      </p>
    ),
  },
  {
    value: "09",
    question: "Can I customize the branding?",
    answer: (
      <p className="leading-relaxed">
        Yes. The platform is designed to be adapted to your brand across the
        customer, merchant and rider apps as well as the admin dashboard.
      </p>
    ),
  },
  {
    value: "10",
    question: "Can I integrate my own payment gateway?",
    answer: (
      <p className="leading-relaxed">
        Payment integrations are supported as part of the platform. Talk to our
        team about the specific payment gateways relevant to your market.
      </p>
    ),
  },
  {
    value: "11",
    question: "Can I operate in multiple cities?",
    answer: (
      <p className="leading-relaxed">
        Yes. Delivery zones and multi-city operation are supported, with
        dedicated configuration available on our Enterprise plan.
      </p>
    ),
  },
  {
    value: "12",
    question: "Do you provide deployment and maintenance?",
    answer: (
      <p className="leading-relaxed">
        Deployment and ongoing maintenance and support are available as part of
        your plan. Setup, integrations and custom development are scoped and
        priced separately from the platform license — see the pricing section
        for details.
      </p>
    ),
  },
  {
    value: "13",
    question: "Can I request custom features?",
    answer: (
      <p className="leading-relaxed">
        Yes. Custom features and workflows can be added through custom
        development, handled separately from the base platform license.
      </p>
    ),
  },
  {
    value: "14",
    question: "Do I get the source code?",
    answer: (
      <p className="leading-relaxed">
        Source code access, white-label rights, hosting and support terms depend
        on the plan and engagement. Our team will walk you through the exact
        licensing arrangement before you commit.
      </p>
    ),
  },
];
