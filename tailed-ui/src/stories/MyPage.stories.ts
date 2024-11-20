import type { Meta, StoryObj } from "@storybook/react";
import { MyPage } from "@/components/ui/MyPage"; // Adjust path as needed

const meta: Meta<typeof MyPage> = {
  title: "Pages/Abhay",
  component: MyPage,
  parameters: {
    layout: "fullscreen", // Ensures the page takes up the entire canvas
  },
  tags: ["autodocs"], // For documentation auto-generation
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {};
