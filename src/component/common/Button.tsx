import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const classes =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-500"
      : "border border-slate-600 text-white hover:bg-slate-800";

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button
