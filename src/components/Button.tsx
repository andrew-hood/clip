import Link from "next/link";
import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props {
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  href,
  className,
  ...props
}: PropsWithChildren<Props>) {
  className = clsx(
    "inline-flex justify-center rounded-2xl bg-teal-400 p-2 px-4 text-sm text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70",
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
