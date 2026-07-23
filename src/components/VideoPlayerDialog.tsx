import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { Project } from "@/data/projects";

interface VideoPlayerDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function getEmbedSrc(project: Project): string {
  if (project.videoType === "youtube") {
    // Accepts full URL or bare ID
    const id = project.videoUrl.includes("/")
      ? project.videoUrl.split(/[/=?&]/).filter(Boolean).pop() ?? project.videoUrl
      : project.videoUrl;
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }
  if (project.videoType === "vimeo") {
    const id = project.videoUrl.split("/").filter(Boolean).pop() ?? project.videoUrl;
    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }
  return project.videoUrl;
}

export function VideoPlayerDialog({ project, open, onOpenChange }: VideoPlayerDialogProps) {
  if (!project) return null;

  const isVertical = project.aspectRatio === "9:16";
  const isSquare = project.aspectRatio === "1:1";
  const aspectClass = isVertical
    ? "aspect-[9/16] max-h-[85vh] w-auto"
    : isSquare
    ? "aspect-square max-h-[85vh] w-auto"
    : "aspect-video w-full max-w-5xl";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-auto border-none bg-transparent p-0 shadow-none">
        <VisuallyHidden>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </VisuallyHidden>
        <div className="flex flex-col items-center gap-4">
          <div className={`${aspectClass} overflow-hidden rounded-lg bg-black shadow-2xl`}>
            {project.videoType === "mp4" ? (
              <video
                key={project.id}
                src={project.videoUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <iframe
                key={project.id}
                src={getEmbedSrc(project)}
                title={project.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full border-0"
              />
            )}
          </div>
          <div className="text-center">
            <p className="font-pixel text-sm uppercase tracking-widest text-background/80">
              {project.platform} · {project.duration}
            </p>
            <h2 className="font-serif-display text-3xl md:text-4xl text-background">
              {project.title}
            </h2>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
