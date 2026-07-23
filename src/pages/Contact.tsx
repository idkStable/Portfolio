import { Layout } from "@/components/Layout";
import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-12 md:py-20 min-h-[calc(100vh-200px)]">
        <div className="max-w-3xl space-y-12">
          <div>
            <p className="font-pixel text-sm uppercase tracking-widest text-muted-foreground">
              contact
            </p>
            <h1 className="mt-2 font-serif-display text-6xl leading-none md:text-8xl">
              Let's edit
              <br />
              something good.
            </h1>
            <p className="mt-6 max-w-xl text-xl text-muted-foreground">
              Reels, shorts, brand spots, or a full content system — send a note with
              what you're working on and I'll get back within a day.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:sameerbasanwal@Gmail.com"
              className="flex items-center gap-4 text-lg hover-highlight group"
            >
              <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span>sameerbasanwal@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/ss.ameer_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg hover-highlight group"
            >
              <Instagram size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span>@ss.ameer_</span>
            </a>

            
          </div>

          <div>
            <p className="text-label mb-2">Based</p>
            <p className="text-lg">India · Working worldwide</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
