export default function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-brand-accent text-white hover:bg-brand-primary",

    secondary:
      "bg-brand-secondary text-white hover:bg-brand-primary",

    outline:
      "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  };

  return (
    <button
      className={`
        px-6 py-3
        rounded-sm
        text-md
        font-secondary
        transition-colors duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}
