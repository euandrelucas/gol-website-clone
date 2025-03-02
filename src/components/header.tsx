"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <GolLogo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavItem href="/voos" label="Voos" />
            <NavItem href="/check-in" label="Check-in" />
            <NavItem href="/status-voo" label="Status de Voo" />
            <NavItem href="/servicos" label="Serviços" hasDropdown />
            <NavItem href="/smiles" label="Smiles" />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-[#FF7020] font-medium"
            >
              Entrar
            </Link>
            <Link
              href="/comprar"
              className="bg-[#FF7020] text-white px-4 py-2 rounded-md font-medium hover:bg-[#E56218] transition-colors"
            >
              Comprar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/voos"
              className="block py-2 text-gray-700 hover:text-[#FF7020]"
              onClick={() => setIsMenuOpen(false)}
            >
              Voos
            </Link>
            <Link
              href="/check-in"
              className="block py-2 text-gray-700 hover:text-[#FF7020]"
              onClick={() => setIsMenuOpen(false)}
            >
              Check-in
            </Link>
            <Link
              href="/status-voo"
              className="block py-2 text-gray-700 hover:text-[#FF7020]"
              onClick={() => setIsMenuOpen(false)}
            >
              Status de Voo
            </Link>
            <Link
              href="/servicos"
              className="block py-2 text-gray-700 hover:text-[#FF7020]"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/smiles"
              className="block py-2 text-gray-700 hover:text-[#FF7020]"
              onClick={() => setIsMenuOpen(false)}
            >
              Smiles
            </Link>
            <div className="pt-4 border-t flex flex-col space-y-3">
              <Link
                href="/login"
                className="text-gray-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                href="/comprar"
                className="bg-[#FF7020] text-white px-4 py-2 rounded-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Comprar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

function NavItem({ href, label, hasDropdown = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-[#FF7020] font-medium flex items-center"
    >
      {label}
      {hasDropdown && <ChevronDown size={16} className="ml-1" />}
    </Link>
  );
}

function GolLogo({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="37"
      viewBox="0 0 91 37"
      className={className}
    >
      <g fill="none">
        <path
          fill="#37322D"
          d="M53.597 0c-1.153 0-2.304.105-3.438.315 8.626 1.604 15.156 8.484 15.156 17.532 0 6.445-5.247 12.319-11.723 12.319-5.807.002-10.74-4.225-11.6-9.94-.86-5.713 2.614-11.193 8.167-12.882a11.788 11.788 0 00-3.435-.51C40.247 6.835 35 12.71 35 19.155c0 9.05 6.53 15.928 15.157 17.531 1.135.21 2.286.316 3.44.315A18.595 18.595 0 0071 25.02V11.98A18.602 18.602 0 0053.597 0z"
          opacity=".25"
        />
        <path
          fill="#FF7020"
          d="M50.14.315A18.615 18.615 0 0046.726 0c-8.86 0-16.264 6.25-18.055 14.59a.613.613 0 01-.6.483h-8.987a.614.614 0 00-.616.617v5.597c0 .34.276.616.616.616h7.894a.615.615 0 01.616.617v2.774c0 .296-.106.582-.298.806a11.626 11.626 0 01-15.614 1.861c-4.9-3.527-6.297-10.22-3.219-15.418 3.079-5.198 9.612-7.178 15.05-4.561a.615.615 0 00.804-.234l2.865-4.829a.618.618 0 00-.244-.863A18.357 18.357 0 0018.469 0C8.269 0 0 8.283 0 18.5S8.269 37 18.469 37a18.402 18.402 0 0013.671-6.065.618.618 0 01.916 0 18.473 18.473 0 0017.083 5.749C41.57 35.08 35.083 28.2 35.083 19.152c0-6.444 5.212-12.318 11.646-12.318 5.766 0 10.664 4.225 11.519 9.938.854 5.712-2.594 11.19-8.107 12.882 1.106.34 2.257.511 3.414.51 6.434 0 11.646-5.874 11.646-12.318C65.195 8.798 58.708 1.919 50.139.315zm40.244 29.328H78.272a.616.616 0 01-.616-.617V1.147A.616.616 0 0077.04.53h-5.586a.616.616 0 00-.616.617v34.089c0 .681.551 1.233 1.231 1.233h18.315c.34 0 .616-.276.616-.616v-5.598a.617.617 0 00-.616-.612z"
        />
      </g>
    </svg>
  );
}
