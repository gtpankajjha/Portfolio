import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant = "primary",
}: ButtonProps) => {
  const classes =
    variant === "primary"
      ? `
        bg-indigo-600
        text-white
        hover:bg-indigo-500
        dark:bg-indigo-600
        dark:hover:bg-indigo-500
      `
      : `
        border
        border-slate-300
        bg-white
        text-slate-800
        hover:border-indigo-500
        hover:bg-slate-100
        hover:text-indigo-600

        dark:border-slate-600
        dark:bg-transparent
        dark:text-white
        dark:hover:border-indigo-500
        dark:hover:bg-slate-800
        dark:hover:text-white
      `;

  return (
    <button
      className={`
        cursor-pointer
        rounded-xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        ${classes}
      `}
    >
      {children}
    </button>
  );
};

export default Button;