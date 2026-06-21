import _Marquee from "react-fast-marquee";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Marquee = (_Marquee as any).default as React.ComponentType<any>;

const companies = [
  "Odoo",
  "POSBANK",
  "ZKTeco",
  "CITY systems",
  "Cisco",
  "Hikvision",
  "Alhua",
  "DrayTek"
];

const topRow = companies.slice(0, 4);
const bottomRow = companies.slice(4);

function LogoItem({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-muted-foreground opacity-60 transition-opacity hover:opacity-100">
      {name}
    </span>
  );
}

export function Logos() {
  return (
    <section className="container py-12">
      <p className="mb-8 text-center text-sm text-muted-foreground">
        Trusted by teams at world-class companies
      </p>

      {/* Desktop: static grid */}
      <div className="hidden flex-col gap-4 lg:flex">
        <div className="flex items-center justify-center gap-4">
          {topRow.map((name) => (
            <LogoItem key={name} name={name} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          {bottomRow.map((name) => (
            <LogoItem key={name} name={name} />
          ))}
        </div>
      </div>

      {/* Mobile: marquee */}
      <div className="lg:hidden">
        <Marquee gradient={false} speed={40} className="gap-4">
          {companies.map((name) => (
            <div key={name} className="mr-4">
              <LogoItem name={name} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
