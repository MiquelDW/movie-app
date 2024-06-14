// indicate that this file or module should be treated as a Client Component
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  // state variable for the current 'search' value from user
  const [search, setSearch] = useState("");
  // instantiate 'router' object with the 'useRouter' hook
  const router = useRouter();

  // callback function to handle onSubmit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // programmatically redirect user to given route with 'router' object
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="mx-auto flex max-w-6xl justify-between px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="h-14 w-full flex-1 rounded-md bg-transparent placeholder-gray-500 outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        type="submit"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
