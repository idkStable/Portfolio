import { Link } from "react-router-dom";

interface FooterProps {
  variant?: "default" | "echelon";
}

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "echelon") {
    return (
      <footer className="border-t border-separator mt-auto">
        <div className="container-wide py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <p className="text-label">Based in</p>
              <div className="text-sm space-y-1">
                <p>Available worldwide</p>
                <p>Working remotely</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-label">Explore</p>
              <div className="text-sm space-y-1">
                <Link to="/work" className="block hover-highlight">Work</Link>
                <Link to="/about" className="block hover-highlight">About</Link>
                <Link to="/contact" className="block hover-highlight">Contact</Link>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-label">Contact</p>
              <div className="text-sm space-y-1">
                <a href="mailto:hello@sameermeena.com" className="block hover-highlight">
                  hello@sameermeena.com
                </a>
                <a
                  href="https://instagram.com/sameermeena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover-highlight"
                >
                  @sameermeena
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-label">Legal</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>© {currentYear} All rights reserved</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-separator overflow-hidden py-6 md:py-8">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="font-serif-display text-6xl md:text-8xl lg:text-[10rem] italic text-foreground mx-8"
              >
                sameer meena ·
              </span>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-separator">
      <div className="container-wide py-10 md:py-14">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-2">
            <p className="font-serif-display text-2xl">Sameer Meena</p>
            <p className="font-pixel text-sm uppercase tracking-widest text-muted-foreground">
              short-form video editor
            </p>
          </div>

          <div className="flex gap-6 font-pixel text-sm uppercase tracking-widest text-muted-foreground">
            <Link to="/work" className="hover-highlight">Work</Link>
            <Link to="/about" className="hover-highlight">About</Link>
            <Link to="/contact" className="hover-highlight">Contact</Link>
          </div>

          <div className="font-pixel text-sm uppercase tracking-widest text-muted-foreground">
            © {currentYear} Sameer Meena
          </div>
        </div>
      </div>
    </footer>
  );
}
