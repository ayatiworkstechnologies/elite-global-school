export default function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-brand-primary text-white hover:bg-red-800",
    outline:
      "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  };

  return (
    <button
      className={`px-6 py-3 rounded-full text-sm font-secondary transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
