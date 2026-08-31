import Link from "next/link";
import { verticals } from "./data";

const SolutionsNav = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full border border-border bg-muted/60">
        {verticals.map((vertical) => (
          <Link
            key={vertical.slug}
            href={`#${vertical.slug}`}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium font-inter text-foreground/80 transition-colors hover:bg-background hover:text-foreground"
          >
            <vertical.icon className="size-4" />
            {vertical.navLabel}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionsNav;
