import React from "react";
import Link from "next/link";

interface ButtonProps {
  content?: string;

  link?: string;
  target?: "_self" | "_blank";
}

const Button: React.FC<ButtonProps> = ({ content = "Get Started", link = "#", target = "_self" }) => {
  const internal = link.startsWith("/");
  const styleButton = `group relative inline-flex items-center justify-center text-fluid-caption rounded-xl bg-gray-900 px-8 py-3 font-semibold font-jakarta text-white transition-all duration-200 hover:bg-slate-900 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30`;
  return (
    <div className="relative inline-flex items-center justify-center gap-4 group">
      <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500/50 via-pink-500/50 to-yellow-400/50 rounded-xl blur-md filter group-hover:opacity-100 group-hover:duration-200" />
      {internal ? (
        <Link href={link} className={styleButton}>
          {content}
        </Link>
      ) : (
        <a target={target} href={link} className={styleButton}>
          {content}
        </a>
      )}
    </div>
  );
};

export default Button;
