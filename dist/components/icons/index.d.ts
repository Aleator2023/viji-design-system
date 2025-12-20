import { default as React } from 'react';
export type IconName = "close" | "plus" | "more" | "arrowNext" | "grid" | "heart";
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;
export declare const ICONS: Record<IconName, Partial<Record<16 | 24, IconComponent>>>;
export {};
