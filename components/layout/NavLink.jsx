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
            ? "block text-xl py-3"
            : "text-sm"
        }
        ${
          active
            ? "text-brand-primary font-semibold text-xl"
            : "text-brand-accent hover:text-brand-primary text-lg"
        }
      `}
    >
      {children}
    </Link>
  );
}
