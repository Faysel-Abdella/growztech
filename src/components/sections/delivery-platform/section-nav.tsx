"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
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
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const activeItem =
    navItems.find((item) =>
      item.href === "/delivery-platform"
        ? pathname === item.href
        : pathname.startsWith(item.href)
    ) ?? navItems[0];

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "auto",
      inline: "center",
      block: "nearest",
    });
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!mobileNavRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="sticky top-16 z-40 mt-24 w-full border-b border-border bg-white">
      {/* Desktop / tablet nav */}
      <nav className="mx-auto hidden max-w-6xl items-center gap-1 overflow-x-auto scrollbar-hide px-4 py-2.5 sm:flex sm:justify-center sm:px-6">
        {navItems.map((item) => {
          const isActive = item.href === activeItem.href;

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

      {/* Mobile nav: current section, expands over the content below to reveal the rest */}
      <div ref={mobileNavRef} className="relative sm:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-2 px-4 py-3 text-sm font-inter"
        >
          <span className="flex items-center gap-2 font-semibold text-primary">
            <activeItem.icon className="size-4" />
            {activeItem.label}
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-foreground/50 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <div
          className={cn(
            "absolute inset-x-0 top-full z-50 grid overflow-hidden bg-white shadow-lg transition-[grid-template-rows] duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col border-t border-border">
              {navItems
                .filter((item) => item.href !== activeItem.href)
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium font-inter text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPlatformSectionNav;
