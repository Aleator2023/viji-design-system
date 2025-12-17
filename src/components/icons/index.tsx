import React from "react";

import Close16 from "../../assets/close_16.svg?react";
import Close24 from "../../assets/close_24.svg?react";

import Plus16 from "../../assets/plus_16.svg?react";
import Plus24 from "../../assets/plus_24.svg?react";

import More16 from "../../assets/More-3_dots_16.svg?react";

import ArrowNext24 from "../../assets/arrow-next_24.svg?react";

export type IconName = "close" | "plus" | "more" | "arrowNext";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export const ICONS: Record<IconName, Partial<Record<16 | 24, IconComponent>>> = {
  close: { 16: Close16, 24: Close24 },
  plus: { 16: Plus16, 24: Plus24 },
  more: { 16: More16 },          //  16
  arrowNext: { 24: ArrowNext24 }, //  24
};