import { useState } from "react";
import { Layout } from "@/components/Layout";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayerDialog } from "@/components/VideoPlayerDialog";
import { projects, type Project, type Platform } from "@/data/projects";

const FILTERS: (Platform | "All")[] = ["All", "Reels", "TikTok", "Shorts", "Commercial"];

const Index = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Platform | "All">("All");

  const handlePlay = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  const visible = filter === "All" ? projects : projects.filter((p) => p.platform === filter);

  return (
    <Layout hideFooter>
      <section className="container-wide py-8 md:py-12">
        {/* Folder-style hero card */}
        <div className="relative mx-auto max-w-5xl">
          {/* Left tab */}
          <div className="folder-tab absolute -top-6 left-8 rounded-t-lg px-5 py-2">
            <p className="font-pixel text-sm uppercase tracking-widest text-foreground">
              Sameer's Portfolio
            </p>
          </div>
          {/* Right tab */}
          <div className="folder-tab absolute -top-6 right-8 rounded-t-lg px-5 py-2">
            <p className="font-pixel text-sm text-foreground">2026</p>
          </div>

          <div className="paper-card relative overflow-visible p-8 md:p-16">
            {/* Sticky note */}
            <div className="sticky-note absolute -top-6 right-16 hidden w-40 rotate-6 rounded-sm p-4 md:block">
              <p className="font-pixel text-lg leading-tight uppercase text-accent-foreground">
                Short-form
                <br />
                video
                <br />
                editor
              </p>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col items-center justify-center py-10 md:py-16">
              <p className="font-pixel text-lg uppercase tracking-widest text-muted-foreground">
                the work of
              </p>
              <h1 className="mt-2 text-center font-serif-display text-6xl leading-none tracking-tight text-foreground md:text-[9rem]">
                portfolio
              </h1>
              <p className="mt-6 font-pixel text-2xl uppercase tracking-widest text-foreground">
                — Sameer Meena —
              </p>
            </div>

            {/* Bio */}
            <div className="mx-auto mt-4 max-w-2xl text-center">
              <p className="font-serif-display text-xl italic text-muted-foreground md:text-2xl">
                Reels, shorts &amp; social-first edits with rhythm and taste.
                Currently editing for creators, founders and small brands.
              </p>
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 font-pixel text-sm uppercase tracking-widest transition-all ${
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {visible.map((p, i) => (
            <VideoCard key={p.id} project={p} onPlay={handlePlay} index={i} />
          ))}
        </div>

        {/* Footer sign-off */}
        <div className="mt-24 flex flex-col items-center gap-2 border-t border-separator pt-10 pb-4 text-center">
          <p className="font-serif-display text-3xl italic text-foreground">
            Have an edit in mind?
          </p>
          <a
            href="/contact"
            className="font-pixel text-lg uppercase tracking-widest text-primary hover:underline"
          >
            → get in touch
          </a>
          <p className="mt-6 font-pixel text-sm uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Sameer Meena
          </p>
        </div>
      </section>

      <VideoPlayerDialog project={active} open={open} onOpenChange={setOpen} />
    </Layout>
  );
};

export default Index;
