import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const links = [{ label: "Work", href: "#work" }, { label: "Studio", href: "#studio" }, { label: "Contact", href: "#contact" }];

export default function NavbarGlass() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-neutral-900">
          <Image src="/placeholder.svg" alt="Studio logo" width={28} height={28} /> Northline
        </Link>
        <ul className="hidden gap-8 md:flex">{links.map((l) => <li key={l.href}><Link href={l.href} className="text-sm text-neutral-600 hover:text-neutral-900">{l.label}</Link></li>)}</ul>
        <button aria-label="Open menu" className="md:hidden"><Menu className="h-5 w-5" /></button>
      </nav>
    </header>
  );
}
