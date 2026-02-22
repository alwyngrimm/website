import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center text-center px-4 page-fade">
      <div className="max-w-2xl w-full">
        <h1 className="home-title text-7xl md:text-8xl font-bold tracking-widest m-0 cursor-default">
          ALWYN GRIMM
        </h1>

        <p className="mt-4 text-xl tracking-widest" style={{ opacity: 0.7 }}>
          StoryTeller • Creator • Dumbass
        </p>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <Link href="/lore" className="nav-link">Lore</Link>
          <Link href="/links" className="nav-link">Links</Link>
          <Link href="/games" className="nav-link">Games Suggested</Link>
          <Link href="/arts" className="nav-link">Arts For Chat</Link>
        </nav>
      </div>
    </main>
  );
}
