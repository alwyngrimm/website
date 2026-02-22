import PageLayout from "@/components/PageLayout";

export const metadata = { title: "Games Suggested — Alwyn Grimm" };

const games = [
  {
    title: "Dark souls",
    genre: "RPG",
    desc: "@penpaa - 2026/02/18 ",
  },
];

export default function Games() {
  return (
    <PageLayout title="Games Suggested">
      <p>These are games Twitch chat recommended without hesitation.</p>
      <div className="mt-8 flex flex-col gap-5">
        {games.map((game, i) => (
          <div
            key={game.title}
            className="border-l-2 pl-5 py-1"
            style={{ borderColor: "#caa94f" }}
          >
            <div className="flex items-baseline gap-3">
              <h3
                className="text-lg font-bold tracking-wide m-0"
                style={{ color: "#f3e6c8" }}
              >
                {game.title}
              </h3>
              <span
                className="text-xs tracking-widest px-2 py-0.5 rounded"
                style={{
                  color: "#caa94f",
                  border: "1px solid rgba(202,169,79,0.3)",
                }}
              >
                {game.genre}
              </span>
            </div>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ opacity: 0.65 }}
            >
              {game.desc}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
