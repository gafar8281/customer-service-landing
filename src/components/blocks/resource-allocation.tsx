import { DashedLine } from "@/components/dashed-line";

const integrations = [
  "Jira",
  "Excel",
  "Notion",
  "Word",
  "Monday",
  "Drive",
  "Asana",
  "Confluence",
];

const topItems = [
  {
    title: "Reusable issue templates",
    description:
      "Standardize your workflows with templates your team can launch in seconds.",
    image: "https://placehold.co/480x280/f5f5f0/888888?text=Templates",
  },
  {
    title: "Simplify your stack",
    description:
      "Connect the tools you already use. Mainline syncs with your entire workflow.",
    logos: integrations,
  },
];

const bottomItems = [
  {
    title: "Graveyard it",
    description:
      "Archive outdated tasks and projects without losing the history.",
    image: "https://placehold.co/480x240/f5f5f0/888888?text=Graveyard",
  },
  {
    title: "Task discussions",
    description:
      "Keep context where it belongs — right next to the task, not in a separate chat.",
    image: "https://placehold.co/480x240/f5f5f0/888888?text=Discussions",
  },
  {
    title: "Smart notifications",
    description:
      "Get alerted when something actually needs your attention — not for every minor update.",
    image: "https://placehold.co/480x240/f5f5f0/888888?text=Notifications",
  },
];

interface ItemProps {
  title: string;
  description: string;
  image?: string;
  logos?: string[];
}

function Item({ title, description, image, logos }: ItemProps) {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-heading text-base font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {image && (
        <div className="relative overflow-hidden rounded-lg border border-border">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </div>
      )}
      {logos && (
        <div className="grid grid-cols-4 gap-2">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded border border-border bg-muted/30 px-2 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ResourceAllocation() {
  return (
    <section id="resource-allocation" className="container py-20">
      <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
        Mainline your resource allocation
        <br className="hidden md:block" /> and execution
      </h2>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border">
        {/* Top row */}
        <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {topItems.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>

        <DashedLine />

        {/* Bottom row */}
        <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {bottomItems.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
