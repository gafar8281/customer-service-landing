import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Features",
    href: "#",
    dropdownItems: [
      { title: "Hero", href: "/#hero", description: "The main headline and value proposition" },
      { title: "Resource Allocation", href: "/#resource-allocation", description: "See how Mainline handles complex workflows" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    // <header className="sticky top-0 z-50 flex justify-center bg-muted/30 px-4 py-5 md:top-12">
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-5 md:top-6">
      <nav className="flex w-full max-w-[700px] items-center justify-between rounded-full border border-border bg-background/80 px-6 py-3 shadow-sm backdrop-blur-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-black">
            M
          </div>
          Customer
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.dropdownItems ? (
              <li key={item.label} className="relative">
                <button
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    openDropdown === item.label && "bg-accent text-accent-foreground",
                  )}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3 transition-transform duration-200",
                      openDropdown === item.label && "rotate-180",
                    )}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-border bg-popover shadow-lg">
                    {item.dropdownItems.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-3 text-sm transition-colors hover:bg-accent"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <p className="font-medium">{child.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {child.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive(item.href) && "bg-accent text-accent-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden font-semibold lg:inline-flex">
            <Link to="/contact">Get Started</Link>
          </Button>

          {/* Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-border bg-background shadow-lg lg:hidden">
          <ul className="flex flex-col p-2">
            {navItems.map((item) =>
              item.dropdownItems ? (
                <li key={item.label}>
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                      {item.dropdownItems.map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent",
                      isActive(item.href) && "bg-accent",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li className="mt-2 border-t border-border pt-2">
              <Button
                asChild
                size="sm"
                className="w-full font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
