import Link from "next/link";

interface NavItemProps {
  to: string;
  title: string;
}
const NavItem = ({ to, title }: NavItemProps) => {
  return (
    <Link href={to} passHref>
      <a className="mr-5 hover:text-gray-900 hover:underline hover:underline-offset-4 text-gray-900 dark:text-white">
        {title}
      </a>
    </Link>
  );
};

export default NavItem;
