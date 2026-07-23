import { useState } from "react";
import { Layout } from "@/components/Layout";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayerDialog } from "@/components/VideoPlayerDialog";
import { projects, type Project, type Platform } from "@/data/projects";

const FILTERS: (Platform | "All")[] = ["All", "Reels", "TikTok", "Shorts", "Commercial"];

const Work = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Platform | "All">("All");

  const visible = filter === "All" ? projects : projects.filter((p) => p.platform === filter);

  return (
    <Layout showEchelonFooter>
      <section className="container-wide pt-8 md:pt-12 pb-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-pixel text-sm uppercase tracking-widest text-muted-foreground">
              the archive
            </p>
            <h1 className="font-serif-display text-6xl leading-none md:text-8xl">
              Selected edits
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {visible.map((p, i) => (
            <VideoCard
              key={p.id}
              project={p}
              onPlay={(proj) => {
                setActive(proj);
                setOpen(true);
              }}
              index={i}
            />
          ))}
        </div>
      </section>

      <VideoPlayerDialog project={active} open={open} onOpenChange={setOpen} />
    </Layout>
  );
};

export default Work;
