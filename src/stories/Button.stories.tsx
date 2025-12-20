import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../components/Button/Button";
import { ICONS } from "../components/icons";

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 6v12M6 12h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const iconOptions = [undefined, ...(Object.keys(ICONS) as Array<keyof typeof ICONS>)];

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    height: { control: "radio", options: [32, 44] },
    shape: { control: "radio", options: ["rect", "square"] },
    fullWidth: { control: "boolean" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },

    iconPosition: {
      control: "select",
      options: ["none", "left", "right", "center"],
    },


    iconName: {
      control: "select",
      options: iconOptions,
    },
  
    icon: { table: { disable: true } },

    onClick: { action: "clicked" },
  },

  args: {
    children: "Example",
    variant: "primary",
    height: 44,
    shape: "rect",
    fullWidth: false,
    isLoading: false,
    disabled: false,
    iconPosition: "none",
    iconName: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const FullWidth: Story = {
  args: { fullWidth: true },
};

export const Heights: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} height={32}>
        Height 32
      </Button>
      <Button {...args} height={44}>
        Height 44
      </Button>
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
};

// ===== IconName  =====

export const CloseSquare44: Story = {
  args: {
    iconName: "close",
    shape: "square",
    height: 44,
    variant: "ghost",
    children: "",
  },
};

export const CloseSquare32: Story = {
  args: {
    iconName: "close",
    shape: "square",
    height: 32,
    variant: "ghost",
    children: "",
  },
};

export const CloseLeft: Story = {
  args: {
    iconName: "close",
    iconPosition: "left",
    children: "Close",
    variant: "outline",
  },
};

export const CloseRight: Story = {
  args: {
    iconName: "close",
    iconPosition: "right",
    children: "Close",
    variant: "outline",
  },
};

// ===== Custom icon (icon prop) =====

export const WithCustomIconLeft: Story = {
  args: {
    icon: <PlusIcon />,
    iconPosition: "left",
    children: "Custom icon",
  },
};

export const WithCustomIconRight: Story = {
  args: {
    icon: <PlusIcon />,
    iconPosition: "right",
    children: "Custom icon",
  },
};

export const MoreSquare32: Story = {
  args: { iconName: "more", shape: "square", height: 32, variant: "ghost", children: "" },
};

export const ArrowNextRight: Story = {
  args: { iconName: "arrowNext", iconPosition: "right", variant: "outline", children: "Next" },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const WithGridIcon = {
  render: () => (
    <Button shape="square" variant="secondary" iconName="grid" />
  ),
};

export const WithHeartIcon = {
  render: () => (
    <Button iconName="heart" iconPosition="left">
      Favorite
    </Button>
  ),
};