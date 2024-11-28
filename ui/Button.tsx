import Link from "next/link";
type ButtonType =
  | "primary"
  | "big"
  | "transparent"
  | "small"
  | "secondary"
  | "round";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: ButtonType;
  onClick?: () => void;
}

function Button({ children, disabled, to, type, onClick }: ButtonProps) {
  const base =
    "inline-block text-sm rounded-sm bg-[#00d6c0] font-semibold uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:bg-blue-900";

  const styles = {
    primary: base + " px-4 py-2 md:px-6 md:py-3 scale-90 hover:scale-95",
    big: base + " px-2.5 py-2 md:px-6 md:scale-110 md:py-2.5 scale-90 ",
    transparent:
      base +
      " px-4 py-2 text-slate-100 border border-[#00d6c0] hover:bg-[#00d6c0] md:px-6 bg-slate-300/5 md:scale-110 md:py-2.5 scale-90 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  if (to)
    return (
      <Link href={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
