"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FilledIcons } from "@/components/ui/filled-icons";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "/delivery-platform", icon: FilledIcons.LayoutGrid },
  { label: "Platforms", href: "/delivery-platform/platform", icon: FilledIcons.Smartphone },
  { label: "Solutions", href: "/delivery-platform/solutions", icon: FilledIcons.Layers },
  { label: "Pricing", href: "/delivery-platform/pricing", icon: FilledIcons.CreditCard },
];

const DeliveryPlatformSectionNav = () => {
  const pathname = usePathname();
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "auto",
      inline: "center",
      block: "nearest",
    });
  }, [pathname]);

  return (
    <div className="sticky top-16 z-40 mt-24 w-full border-b border-border bg-white">
      <nav className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto scrollbar-hide px-4 py-2.5 sm:justify-center sm:px-6">
        {navItems.map((item) => {
          const isActive =
            item.href === "/delivery-platform"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              ref={isActive ? activeRef : undefined}
              className={cn(
                "flex shrink-0 items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-medium font-inter whitespace-nowrap transition-colors",
                isActive
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-foreground/70 hover:border-border hover:text-foreground"
              )}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DeliveryPlatformSectionNav;
