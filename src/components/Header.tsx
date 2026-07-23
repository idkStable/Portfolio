import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

interface HeaderProps {
  revealMode?: boolean;
}

export function Header({ revealMode = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(!revealMode);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!revealMode) {
      setIsVisible(true);
      return;
    }
    const handleMouseMove = (e: MouseEvent) => setIsVisible(e.clientY < 100);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [revealMode]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link to="/" className="flex items-baseline gap-2 hover:opacity-70 transition-opacity">
            <span className="font-serif-display text-2xl md:text-3xl leading-none text-foreground">
              Sameer Meena
            </span>
            <span className="hidden md:inline font-pixel text-sm uppercase tracking-widest text-muted-foreground">
              — video editor
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-pixel text-sm uppercase tracking-widest transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2" aria-label="Toggle theme">
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            <button className="p-2 -mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
          <nav className="container-wide py-12 flex flex-col gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="font-serif-display text-4xl text-foreground animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
