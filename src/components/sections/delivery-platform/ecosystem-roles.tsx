import { FilledIcons } from "@/components/ui/filled-icons";
import SectionShow from "@/components/section-show";

const roles = [
  {
    title: "Customer",
    description: "Order, pay and track deliveries.",
    icon: FilledIcons.Smartphone,
  },
  {
    title: "Merchant",
    description: "Manage products, orders and business operations.",
    icon: FilledIcons.Store,
  },
  {
    title: "Rider",
    description: "Receive deliveries, navigate and complete orders.",
    icon: FilledIcons.Bike,
  },
  {
    title: "Admin",
    description: "Control the entire platform from one dashboard.",
    icon: FilledIcons.LayoutDashboard,
  },
];

const EcosystemRoles = () => {
  return (
    <section className="px-2.5">
      <div className="py-20 bg-muted rounded-t-4xl">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionShow title="Complete Ecosystem" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              Everything You Need to Run a Delivery Business
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="mt-6 text-base text-center text-description md:text-lg"
            >
              From customer ordering to merchant operations, rider dispatch and administration,
              everything works together in one platform.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {roles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col px-6 pb-6 pt-7 bg-background w-full drop-shadow-md gap-8 rounded-2xl md:rounded-3xl border"
              >
                <role.icon className="size-10 text-primary" />
                <div className="flex flex-col gap-3">
                  <p className="text-foreground text-xl font-semibold font-gilroy">
                    {role.title}
                  </p>
                  <p className="text-base font-normal font-inter text-description">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemRoles;
