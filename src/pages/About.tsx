import { Layout } from "@/components/Layout";

const clients = [
  "Nomad Apparel",
  "Nova",
  "Rep Club",
  "Kōhī Roasters",
  "Vault Esports",
  "Alto Studio",
];

const expertise = [
  "Reels",
  "TikTok",
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
                I'm a <span className="text-foreground">short-form video editor</span>{" "}
                working with creators, founders, and small brands to make reels, shorts,
                and social-first edits that actually get watched.
              </p>
              <p>
                My edits lean on rhythm — sound design, pacing, and typography working
                together — instead of trend chasing. I like tight cuts, clear stories,
                and a color grade that feels like the room it was shot in.
              </p>
              <p>
                When I'm not editing, I'm usually breaking down other people's edits
                frame-by-frame or overthinking a font pairing.
              </p>
            </div>
          </div>

          <div>
            <p className="text-label mb-4">Selected clients</p>
            <ul className="grid grid-cols-2 gap-y-2 md:grid-cols-3">
              {clients.map((c) => (
                <li key={c} className="text-lg">{c}</li>
              ))}
            </ul>
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
