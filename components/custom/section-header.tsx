import { cn } from "cn";
import { PiArrowUpRight } from "react-icons/pi";

export default function SectionHeader({
  title,
  detail,
  ping,
  onClick,
  actionText
}: {
  title: string;
  detail?: string;
  ping?: boolean;
  onClick?: () => void;
  actionText?: string
}) {
  return (
    <div className="absolute inset-x-0 top-0 z-20">
      <div className={cn('flex items-center justify-between bg-accent rounded-t-lg gap-3', actionText ? 'px-2 py-1' : 'p-2')}>
        <p className="text-xs">{title}</p>
        {detail ? (
          <div className="flex flex-row items-start justify-center gap-1">
            {actionText ? (
              <button
                type="button"
                onClick={onClick}
                aria-haspopup="dialog"
                className="inline-flex w-max items-center gap-1 rounded-lg cursor-pointer border border-neutral-400/60 px-2 py-1 text-xs transition-colors hover:bg-slate-100 dark:border-neutral-600 dark:bg-neutral-700/40 dark:hover:bg-zinc-700"
              >
                <span>{actionText}</span>
                <PiArrowUpRight />
              </button>
            ) : (
              <p className="truncate text-right text-[11px] text-neutral-400">
                {detail}
              </p>
            )}
            {ping && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-[#84CC16] opacity-75" />
                <span className="relative inline-flex h-2 w-2 scale-75 rounded-full bg-[#84CC16]" />
              </span>
            )}
          </div>
        ) : null}
      </div>
      <div className="h-px w-full bg-neutral-400/40 dark:bg-neutral-600" />
    </div>
  );
}