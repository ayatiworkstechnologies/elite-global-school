import Link from "next/link";
import { IoStar } from "react-icons/io5";

export default function NavLink({
  href,
  children,
  active = false,
  mobile = false,
  onClick,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-2
        font-secondary tracking-wide transition-colors duration-200
        ${mobile ? "block text-xl py-3" : "text-sm"}
        ${
          active
            ? "text-brand-primary font-semibold"
            : "text-brand-accent hover:text-brand-primary"
        }
      `}
    >
      {active && <IoStar className="text-brand-primary text-sm" />}
      {children}
    </Link>
  );
}
