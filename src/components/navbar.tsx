"use client"
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert(`Mencari: ${query}`);
  };

  return (
    <nav className="bg-blue-700 text-white py-1 px-4 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1">
          <Image
            src="/apt.jpg"
            alt="Apotek Rahmi Farma Logo"
            width={60}
            height={50}
            className="object-contain"
          />
          <span className="text-sm font-semibold">Apotek Rahmi Farma</span>
        </span>
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={24} />
      </button>

      <NavMenu menuOpen={menuOpen} />

      <div className="relative">
        <SearchBar
          showSearch={showSearch}
          handleSearchToggle={handleSearchToggle}
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      </div>
    </nav>
  );
}

const NavMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <ul
      className={`absolute top-full left-0 w-full bg-blue-700 text-white flex flex-col items-center space-y-3 p-4 transition-transform duration-300 ease-in-out md:flex-row md:relative md:top-0 md:w-auto md:space-y-0 md:space-x-3 md:p-0 md:bg-transparent md:text-xs md:font-semibold ${menuOpen ? "block" : "hidden md:flex"}`}
    >
      <li className="hover:underline cursor-pointer">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:underline cursor-pointer">
        <Link href="/Tentang">Tentang Kami</Link>
      </li>
      <li className="hover:underline cursor-pointer">
        <Link href="/contact">Contact</Link>
      </li>
      <li className="hover:underline cursor-pointer">
        <Link href="/services_apt">Services</Link>
      </li>
    </ul>
  );
};

const SearchBar = ({
  showSearch,
  handleSearchToggle,
  query,
  setQuery,
  handleSearch,
}: {
  showSearch: boolean;
  handleSearchToggle: () => void;
  query: string;
  setQuery: (value: string) => void;
  handleSearch: (event: { preventDefault: () => void }) => void;
}) => {
  return (
    <div className="relative">
      <button onClick={handleSearchToggle} className="flex items-center">
        <Search className="text-white" />
      </button>

      {showSearch && (
        <form
          onSubmit={handleSearch}
          className="absolute right-0 top-full mt-2 bg-white p-2 shadow-md rounded-md"
        >
          <input
            type="text"
            className="border p-1 text-black"
            placeholder="Cari..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">
            Go
          </button>
        </form>
      )}
    </div>
  );
};
