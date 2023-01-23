import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Container({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx("flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
