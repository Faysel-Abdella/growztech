import { Check, X } from "lucide-react";
import SectionShow from "@/components/section-show";
import { buildVsBuyIncluded, buildVsBuyExtra } from "./data";

const BuildVsBuy = () => {
  return (
    <section className="px-2.5">
      <div className="py-20 bg-muted rounded-4xl">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <SectionShow title="Build vs Buy" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              Why Build Everything From Scratch?
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-14 w-full overflow-x-auto rounded-3xl border border-border bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]"
          >
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-muted/70">
                  <th className="px-6 py-4 font-gilroy font-semibold text-foreground border-b border-border">
                    &nbsp;
                  </th>
                  <th className="px-6 py-4 font-gilroy font-semibold text-foreground border-b border-border">
                    Build From Scratch
                  </th>
                  <th className="px-6 py-4 font-gilroy font-semibold text-primary border-b border-border">
                    Our Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {buildVsBuyIncluded.map((row, i) => (
                  <tr key={row} className={i % 2 === 1 ? "bg-muted/30" : undefined}>
                    <td className="px-6 py-4 font-inter text-foreground border-b border-border">
                      {row}
                    </td>
                    <td className="px-6 py-4 border-b border-border">
                      <span className="inline-flex items-center gap-2 text-description font-inter">
                        <X className="size-4 shrink-0" />
                        Build
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-border">
                      <span className="inline-flex items-center gap-2 text-primary font-inter font-medium">
                        <Check className="size-4 shrink-0" />
                        Included
                      </span>
                    </td>
                  </tr>
                ))}
                {buildVsBuyExtra.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      (buildVsBuyIncluded.length + i) % 2 === 1 ? "bg-muted/30" : undefined
                    }
                  >
                    <td className="px-6 py-4 font-inter text-foreground border-b border-border last:border-b-0">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 font-inter text-description border-b border-border last:border-b-0">
                      {row.build}
                    </td>
                    <td className="px-6 py-4 font-inter font-medium text-primary border-b border-border last:border-b-0">
                      {row.platform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-8 text-center text-description text-base md:text-lg font-inter leading-relaxed max-w-2xl mx-auto"
          >
            Don&apos;t spend months rebuilding delivery infrastructure that already exists. Start
            with a proven foundation and focus your resources on growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildVsBuy;
