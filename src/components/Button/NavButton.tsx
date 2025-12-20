import React from "react";
import { Button } from "../Button/Button";
import type { ButtonProps } from "../Button/Button";
import type { IconName } from "../icons";

export type NavButtonProps = Omit<ButtonProps, "align" | "children" | "variant"> & {
  label: string;
  subLabel?: string;
  iconName?: IconName;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  active?: boolean;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function NavButton({
  label,
  subLabel,
  leftSlot,
  rightSlot,
  iconName,
  active = false,
  className,
  ...props
}: NavButtonProps) {
  const rootCls = cx(
    // layout
    "gap-2 px-3 border border-transparent transition-colors",
    "hover:border-transparent",

    // states
    active
      ? // ACTIVE: 
        "bg-transparent text-white !hover:bg-transparent !hover:text-white"
      : // INACTIVE: 
        "bg-transparent !text-white/40 hover:!text-white !hover:bg-white/20",

    className
  );

  const subLabelCls = cx(
    "block truncate text-[12px] leading-4",
    active ? "text-white/60" : "text-white/40"
  );

  return (
    <Button
      {...props}
      fullWidth
      align="start"
      height={props.height ?? 44}
      variant="ghost"
      iconName={iconName}
      iconPosition={iconName ? "left" : "none"}
      className={rootCls}
    >
      {/* LEFT SLOT (avatar / icon) */}
      {leftSlot ? (
        <span className="inline-flex items-center text-inherit">{leftSlot}</span>
      ) : null}

      {/* TEXT */}
      <span className="min-w-0 flex-1">
        <span className="block truncate">{label}</span>
        {subLabel ? <span className={subLabelCls}>{subLabel}</span> : null}
      </span>

      {/* RIGHT SLOT */}
      {rightSlot ? (
        <span className="inline-flex items-center text-inherit">{rightSlot}</span>
      ) : null}
    </Button>
  );
}