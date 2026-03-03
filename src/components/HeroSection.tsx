import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Foundry", path: "/" },
  { label: "Typefaces", path: "/typefaces" },
  { label: "Designers", path: "/designers" },
  { label: "About", path: "/about" },
];

export function HeroSection() {
  const { pathname } = useLocation();

  return (
    <header className="pt-10 pb-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-foreground text-sm uppercase tracking-wide">
          全球字体厂商目录
        </h1>
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              className={`text-xs transition-colors ${
                pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="border border-border px-3 py-1 text-foreground text-xs transition-colors hover:bg-muted"
            to="/submit"
          >
            Submit
          </Link>
        </nav>
      </div>
      <hr className="mt-6 border-border" />
    </header>
  );
}
