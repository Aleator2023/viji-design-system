import { default as React } from 'react';
import { ButtonProps } from '../Button/Button';
import { IconName } from '../icons';
export type NavButtonProps = Omit<ButtonProps, "align" | "children" | "variant"> & {
    label: string;
    subLabel?: string;
    iconName?: IconName;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    active?: boolean;
};
export declare function NavButton({ label, subLabel, leftSlot, rightSlot, iconName, active, className, ...props }: NavButtonProps): import("react/jsx-runtime").JSX.Element;
