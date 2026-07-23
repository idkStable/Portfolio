import { Layout } from "@/components/Layout";



const expertise = [
  "Reels",
  "Talking Heads",
  "YouTube Shorts",
  "Motion Graphics",
  "Color Grading",
  "Sound Design",
];

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-12 md:py-20">
        <div className="max-w-3xl space-y-12">
          <div>
            <p className="font-pixel text-sm uppercase tracking-widest text-muted-foreground">
              about
            </p>
            <h1 className="mt-2 font-serif-display text-6xl leading-none md:text-8xl">
              Hi, I'm Sameer.
            </h1>

            <div className="mt-8 space-y-5 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up">
              <p>
                I'm a <span className="text-foreground">video editor</span> creating
                high-retention content for creators, founders, and brands. I focus on
                pacing, storytelling, and motion that keeps people watching.
              </p>
              <p>
                From talking heads and motion graphics to gaming edits and commercials,
                I create content that's clean, engaging, and built for today's attention
                span.
              </p>
              <p>
                When I'm not editing, I'm usually breaking down other people's edits
                frame-by-frame or overthinking a font pairing.
              </p>
            </div>
          </div>

          

          <div>
            <p className="text-label mb-4">What I do</p>
            <div className="flex flex-wrap gap-2">
              {expertise.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border px-4 py-1.5 font-pixel text-sm uppercase tracking-widest"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
