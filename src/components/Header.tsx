import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
// navigate users to the specified routes without a full page reload
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    // Header Container
    <header className="mx-auto flex max-w-6xl items-center justify-between p-3">
      {/* Left Section */}
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <DarkModeSwitch />

        <Link href="/" className="flex items-center gap-1">
          <span className="rounded-lg bg-amber-500 px-2 py-1 text-2xl font-bold">
            IMDB
          </span>
          <span className="hidden text-xl sm:inline">Clone</span>
        </Link>
      </div>
    </header>
  );
}
