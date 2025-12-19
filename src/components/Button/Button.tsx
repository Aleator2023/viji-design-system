import React from "react";
import type { IconName } from "../icons";
import { ICONS } from "../icons";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Height = 32 | 44;
type Shape = "rect" | "square";
type IconPosition = "none" | "left" | "right" | "center";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> & {
  variant?: Variant;
  height?: Height;
  shape?: Shape;
  fullWidth?: boolean;
  isLoading?: boolean;

  iconName?: IconName;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;

  disabled?: boolean;
};

const base =
  "inline-flex select-none items-center justify-center rounded-lg transition " +
  "disabled:cursor-not-allowed";

const heightStyles: Record<Height, string> = {
  32: "h-8 text-[13px] leading-4 font-normal",
  44: "h-11 text-[14px] leading-[18px] font-medium",
};

const paddingsRectBase: Record<Height, string> = {
  32: "px-4", 
  44: "px-7", 
};

const gapByHeight: Record<Height, string> = {
  32: "gap-1",
  44: "gap-2",
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#1361E6] text-white hover:bg-[#1361E6]/80 " +
    "disabled:bg-[#1361E6]/40 disabled:text-white/40",
  secondary:
    "bg-white/20 text-white hover:bg-white/30 " +
    "disabled:bg-white/10 disabled:text-white/40",
  outline:
    "bg-transparent text-white/80 border border-white/20 " +
    "hover:bg-white/20 hover:text-white " +
    "disabled:text-white/40 disabled:hover:bg-transparent",
  ghost:
    "bg-transparent text-white/80 hover:bg-white/20 hover:text-white " +
    "disabled:text-white/40 disabled:hover:bg-transparent",
};

const iconSizeByHeight: Record<Height, string> = {
  32: "h-4 w-4",
  44: "h-6 w-6",
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function Spinner({ sizeClass }: { sizeClass: string }) {
  return (
    <span
      className={cx(
        "inline-block rounded-full border border-current border-t-transparent animate-spin",
        sizeClass
      )}
      aria-hidden="true"
    />
  );
}

function getRectPadding(height: Height, iconPos: IconPosition, hasIcon: boolean) {
  if (!hasIcon || iconPos === "none" || iconPos === "center") {
    return paddingsRectBase[height];
  }

  if (height === 32) {
    if (iconPos === "left") return "pl-3 pr-4";  // 12 / 16
    if (iconPos === "right") return "pl-4 pr-3"; // 16 / 12
  }

  // height === 44
  if (iconPos === "left") return "pl-3 pr-5";   // 12 / 20
  if (iconPos === "right") return "pl-5 pr-3";  // 20 / 12

  return paddingsRectBase[height];
}

export function Button({
  variant = "primary",
  height = 44,
  shape = "rect",
  fullWidth,
  isLoading,
  disabled,
  className,
  children,

  iconName,
  icon,
  iconPosition = "none",

  type,
  ...props
}: ButtonProps) {
  const enforcedIconPosition: IconPosition =
    shape === "square" ? "center" : iconPosition;


const preferredIconPx: 16 | 24 = height === 32 ? 16 : 24;

const IconComponent =
  iconName ? (ICONS[iconName][preferredIconPx] ?? ICONS[iconName][24] ?? ICONS[iconName][16] ?? null) : null;

const resolvedIcon: React.ReactNode =
  icon ?? (IconComponent ? <IconComponent className="h-full w-full" /> : null);

  const hasIcon = !!resolvedIcon && enforcedIconPosition !== "none";

  const hasText =
    typeof children !== "undefined" && children !== null && children !== "";

  const iconOnly =
    shape === "square" || (hasIcon && enforcedIconPosition === "center");

  const isDisabled = !!disabled || !!isLoading;

  const squareSize = height === 32 ? "w-8" : "w-11";

  const rootClassName = cx(
    base,
    heightStyles[height],
    variantStyles[variant],
    shape === "rect" && getRectPadding(height, enforcedIconPosition, hasIcon),
    shape === "square" && cx("px-0", squareSize),
    fullWidth && shape !== "square" && "w-full",
    className
  );

  const renderIcon = () => {
    if (!resolvedIcon) return null;
    return (
      <span
        className={cx(
          "inline-flex items-center justify-center",
          iconSizeByHeight[height]
        )}
      >
        {resolvedIcon}
      </span>
    );
  };

  return (
    <button
      {...props}
      type={type ?? "button"}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={cx(rootClassName, isLoading && "relative")}
    >

        <span
          className={cx(
            "inline-flex items-center justify-center",
            gapByHeight[height],
            isLoading && "opacity-0"
          )}
        >
        {hasIcon && enforcedIconPosition === "left" ? renderIcon() : null}

        {!iconOnly && hasText ? (
          <span className="inline-flex">{children}</span>
        ) : null}

        {hasIcon && enforcedIconPosition === "right" ? renderIcon() : null}

        {hasIcon && enforcedIconPosition === "center" ? renderIcon() : null}
      </span>

      {isLoading ? (
        <span className="absolute inset-0 inline-flex items-center justify-center">
          <Spinner sizeClass={iconSizeByHeight[height]} />
        </span>
      ) : null}
    </button>
  );
}