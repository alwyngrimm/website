import PageLayout from "@/components/PageLayout";

export const metadata = { title: "Links — Alwyn Grimm" };

const links = [
  {
    label: "Twitch",
    url: "https://www.twitch.tv/alwyngrimm",
    desc: "Streaming",
  },
  {
    label: "Twitter / X",
    url: "https://twitter.com",
    desc: "Where the chaos lives",
  },
  {
    label: "Discord",
    url: "https://discord.com/invite/zPfwRFJwtj",
    desc: "Come hang",
  },
  {
    label: "Lore videos on Youtube",
    url: "https://www.youtube.com/@AlwynGrimmsStories",
  },

  {
    label: "Twitch Vods Edited",
    url: "https://www.youtube.com/@Alwynsgrimmtakes",
  },
];

export default function Links() {
  return (
    <PageLayout title="Links">
      <p>Find me across the void. Or don't. No pressure.</p>
      <div className="mt-8 flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card flex items-center justify-between rounded-lg px-5 py-2"
            style={{
              borderColor: "rgba(202,169,79,0.2)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div className="flex flex-col">
              <p
                className="font-bold tracking-widest mt-1 text-xl"
                style={{ color: "#f3e6c8", opacity: 1 }}
              >
                {link.label}
              </p>
              <p className="text-sm " style={{ opacity: 0.55 }}>
                {link.desc}
              </p>
            </div>
            <span style={{ color: "#caa94f" }} className="text-lg">
              →
            </span>
          </a>
        ))}
      </div>
    </PageLayout>
  );
}
