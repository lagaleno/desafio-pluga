// Jest imports
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "intersection-observer";

// Component import
import ToolCard from "@/components/ToolCard";

// Mock import
import toolsMock from "../__mocks__/toolsMock.json";

describe("Tool Card", () => {
  it("Renders component correctly", () => {
    toolsMock.forEach((tool) => {
      const { container } = render(<ToolCard tool={tool} />);
      expect(container).toMatchSnapshot();
    });
  });
});
