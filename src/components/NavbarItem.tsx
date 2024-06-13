// indicate that this file or module should be treated as a Client Component
"use client";

// navigate users to the specified routes without a full page reload
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// predefine object structure for the given 'props' object
type NavbarItemProps = {
  title: string;
  // value for query parameter 'genre'
  param: string;
};

// destructure given 'props' object
export default function NavbarItem({ title, param }: NavbarItemProps) {
  // read the query parameters inside the current URL with 'useSearchParams' hook
  const searchParams = useSearchParams();
  // retrieve the value of query paremeter "genre"
  const genre = searchParams.get("genre");
  console.log(genre);

  return (
    <div>
      <Link
        // add 'active' styling if current value of query param is equal to the query param value given to 'param'
        className={`${genre === param && "rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8"} font-semibold hover:text-amber-600`}
        // navigate user to Home page and include dynamic query parameter 'genre'
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
