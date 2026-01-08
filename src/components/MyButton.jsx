import { cn } from "@/lib/utils";

const MyButton = ({
  icon,
  text = "Text",
  onClick,
  disabled,
  className,
  iconLeft = false,
  iconRight = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors bg-transparent text-foreground hover:bg-accent/50 hover:text-accent-foreground             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring             disabled:pointer-events-none disabled:opacity-50",
        className
      )}
    >
      {iconLeft && icon}
      {text}
      {iconRight && icon}
    </button>
  );
};

export default MyButton;
