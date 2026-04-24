import { clsx } from "clsx";

export function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "h-8 w-8 border-2 border-viettel border-t-transparent rounded-full animate-spin",
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
}
