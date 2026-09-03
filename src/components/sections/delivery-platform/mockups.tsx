import { cn } from "@/lib/utils";
import type { IconComponent } from "./data";

interface PhoneMockupProps {
  label: string;
  icon: IconComponent;
  className?: string;
}

export function PhoneMockup({ label, icon: Icon, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[220px] aspect-[9/18] rounded-[2rem] border-[6px] border-foreground/10 bg-white shadow-xl shadow-black/10 overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="h-6 w-full flex items-center justify-center shrink-0">
        <div className="h-1.5 w-14 rounded-full bg-foreground/10" />
      </div>
      <div className="flex-1 flex flex-col gap-3 px-4 pb-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Icon className="size-4" />
          </div>
          <div className="h-2.5 w-20 rounded-full bg-foreground/10" />
        </div>
        <div className="h-20 w-full rounded-xl bg-muted" />
        <div className="h-2 w-full rounded-full bg-foreground/10" />
        <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
        <div className="flex gap-2">
          <div className="h-14 flex-1 rounded-lg bg-muted" />
          <div className="h-14 flex-1 rounded-lg bg-muted" />
        </div>
        <div className="mt-auto h-9 w-full rounded-full bg-primary/90" />
      </div>
      <div className="pb-3 flex justify-center">
        <p className="text-[10px] font-medium font-inter text-description">{label}</p>
      </div>
    </div>
  );
}

interface DashboardMockupProps {
  label: string;
  icon: IconComponent;
  className?: string;
}

export function DashboardMockup({ label, icon: Icon, className }: DashboardMockupProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl border border-border bg-white shadow-xl shadow-black/5 overflow-hidden flex flex-col",
        className
      )}
    >
      <div className="h-9 flex items-center gap-1.5 px-4 border-b border-border bg-muted/60 shrink-0">
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="size-2 rounded-full bg-foreground/15" />
        <span className="size-2 rounded-full bg-foreground/15" />
        <div className="ml-3 flex items-center gap-1.5">
          <Icon className="size-3.5 text-primary" />
          <p className="text-[11px] font-medium font-inter text-description">{label}</p>
        </div>
      </div>
      <div className="flex flex-1 min-h-[220px]">
        <div className="hidden sm:flex w-1/4 flex-col gap-2.5 p-4 border-r border-border bg-muted/30">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={cn("h-2 rounded-full bg-foreground/10", i === 0 && "bg-primary/60")}
            />
          ))}
        </div>
        <div className="flex-1 p-4 grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-muted/60 border border-border p-3 flex flex-col gap-2"
            >
              <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
              <div className="h-4 w-2/3 rounded-full bg-primary/20" />
            </div>
          ))}
          <div className="col-span-2 h-16 rounded-xl bg-muted/60 border border-border" />
        </div>
      </div>
    </div>
  );
}
