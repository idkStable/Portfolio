import { Play } from "lucide-react";
import type { Project } from "@/data/projects";

interface VideoCardProps {
  project: Project;
  onPlay: (project: Project) => void;
  index?: number;
}

export function VideoCard({ project, onPlay, index = 0 }: VideoCardProps) {
  const aspectClass =
    project.aspectRatio === "16:9"
      ? "aspect-video"
      : project.aspectRatio === "1:1"
      ? "aspect-square"
      : "aspect-[9/16]";

  return (
    <button
      type="button"
      onClick={() => onPlay(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPlay(project);
        }
      }}
      className="group block w-full text-left animate-fade-in-up transition-all duration-300 hover:-translate-y-1 focus:outline-none"
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`Play ${project.title}`}
    >
      <div
        className={`${aspectClass} relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-2xl`}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Bottom gradient for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Pixel duration chip */}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-0.5 font-pixel text-sm text-foreground shadow-sm">
          {project.duration}
        </span>

        {/* Platform tag */}
        <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-0.5 font-pixel text-sm text-primary-foreground shadow-sm">
          {project.platform}
        </span>

        {/* Play glyph */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </div>
        </div>

        {/* Title */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-serif-display text-2xl leading-tight text-white transition-all duration-300 group-hover:-translate-y-1">
            {project.title}
          </h3>
         
        </div>
      </div>
    </button>
  );
}
