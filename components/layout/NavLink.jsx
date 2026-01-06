import Link from "next/link";

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
        font-secondary tracking-wide transition-colors duration-200
        ${
          mobile
            ? "block text-lg py-3"
            : "text-sm"
        }
        ${
          active
            ? "text-brand-primary font-semibold"
            : "text-text-secondary hover:text-brand-primary"
        }
      `}
    >
      {children}
    </Link>
  );
}
