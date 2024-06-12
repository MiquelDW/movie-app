// navigate users to the specified routes without a full page reload
import Link from "next/link";
import { IconType } from "react-icons";

// predefine object structure for the given 'props' object
type MenuItemProps = {
  title: string;
  address: string;
  Icon: IconType;
};

// destructure given 'props' object
export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    // navigate user to the specified route
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden text-sm uppercase sm:inline">{title}</p>
    </Link>
  );
}
