import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { NavButton } from "../components/Button/NavButton";
import { ICONS } from "../components/icons";
import type { IconName } from "../components/icons";

type StoryArgs = React.ComponentProps<typeof NavButton> & {
  containerWidth?: number;
};

const iconOptions: Array<IconName | undefined> = [
  undefined,
  ...(Object.keys(ICONS) as IconName[]),
];

const meta = {
  title: "UI/NavButton",
  component: NavButton,

  argTypes: {
    containerWidth: {
      control: { type: "range", min: 100, max: 420, step: 10 },
      description: "Width of navigation container (storybook only)",
    },

    height: { control: "radio", options: [32, 44] },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },

    iconName: { control: "select", options: iconOptions },

    label: { control: "text" },
    subLabel: { control: "text" },

    leftSlot: { table: { disable: true } },
    rightSlot: { table: { disable: true } },

    onClick: { action: "clicked" },
  },

  args: {
    containerWidth: 280,
    label: "Sandbox",
    subLabel: "",
    iconName: "grid",
    height: 44,
    active: false,
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<StoryArgs>;

const Container = ({
  width,
  children,
}: {
  width: number;
  children: React.ReactNode;
}) => (
  <div
    style={{
      width,
      background: "#000",
      padding: 10,
      borderRadius: 12,
    }}
  >
    {children}
  </div>
);

export const Playground: Story = {
  render: ({ containerWidth = 280, ...args }) => (
    <Container width={containerWidth}>
      <NavButton {...args} />
    </Container>
  ),
};

export const Narrow: Story = {
  render: (args) => (
    <Container width={200}>
      <NavButton {...args} label="Very long navigation label example" />
    </Container>
  ),
};

export const Wide: Story = {
  render: (args) => (
    <Container width={380}>
      <NavButton {...args} />
    </Container>
  ),
};

export const WithSubLabel: Story = {
  args: {
    label: "Sign In",
    subLabel: "@guest",
    iconName: undefined,
  },
};

export const WithAvatar: Story = {
  render: (args) => (
    <Container width={300}>
      <NavButton
        {...args}
        leftSlot={<div className="w-6 h-6 rounded-full bg-white/20" />}
        label="Alexander"
        subLabel="@alex"
        iconName={undefined}
      />
    </Container>
  ),
};