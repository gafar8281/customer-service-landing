const investors = [
  { name: "Rania Al-Otaibi", company: "STV Capital", image: "https://i.pravatar.cc/120?u=investor-1" },
  { name: "Khalid Mansouri", company: "Wa'ed Ventures", image: "https://i.pravatar.cc/120?u=investor-2" },
  { name: "Nadia Farhan", company: "Impact46", image: "https://i.pravatar.cc/120?u=investor-3" },
  { name: "Tariq Al-Salem", company: "Saudi Aramco Ventures", image: "https://i.pravatar.cc/120?u=investor-4" },
  { name: "Leen Qureshi", company: "VentureSouq", image: "https://i.pravatar.cc/120?u=investor-5" },
];

export function Investors() {
  return (
    <section className="container py-20">
      <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
        Our investors
      </h2>
      <p className="mt-4 text-center text-muted-foreground">
        Backed by leading investors who believe in our mission.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-5">
        {investors.map((investor) => (
          <div
            key={investor.name}
            className="flex flex-col items-center gap-3 text-center"
          >
            <img
              src={investor.image}
              alt={investor.name}
              className="size-20 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-semibold">{investor.name}</p>
              <p className="text-xs text-muted-foreground">{investor.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
