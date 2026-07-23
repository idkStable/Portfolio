import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

function embedSrc(url: string, type: "youtube" | "vimeo" | "mp4"): string {
  if (type === "youtube") {
    const id = url.includes("/") ? url.split(/[/=?&]/).filter(Boolean).pop() ?? url : url;
    return `https://www.youtube.com/embed/${id}?rel=0`;
  }
  if (type === "vimeo") {
    const id = url.split("/").filter(Boolean).pop() ?? url;
    return `https://player.vimeo.com/video/${id}`;
  }
  return url;
}

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/work" replace />;

  const isVertical = project.aspectRatio === "9:16";
  const aspectClass = isVertical
    ? "aspect-[9/16] max-w-sm mx-auto"
    : project.aspectRatio === "1:1"
    ? "aspect-square max-w-2xl mx-auto"
    : "aspect-video w-full";

  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-8 md:py-12">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-pixel text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to work
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          {/* Player */}
          <div>
            <div className={`${aspectClass} overflow-hidden rounded-lg bg-black`}>
              {project.videoType === "mp4" ? (
                <video src={project.videoUrl} controls playsInline className="h-full w-full object-contain" />
              ) : (
                <iframe
                  src={embedSrc(project.videoUrl, project.videoType)}
                  title={project.title}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              )}
            </div>
          </div>

          {/* Meta */}
          <aside className="space-y-8">
            <div>
              <p className="font-pixel text-sm uppercase tracking-widest text-muted-foreground">
                {project.platform} · {project.duration}
              </p>
              <h1 className="mt-2 font-serif-display text-5xl leading-none md:text-6xl">
                {project.title}
              </h1>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-label mb-1">Client</p>
                <p>{project.client}</p>
              </div>
              <div>
                <p className="text-label mb-1">Year</p>
                <p>{project.year}</p>
              </div>
            </div>

            <div>
              <p className="text-label mb-2">Categories</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-pixel text-sm uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
