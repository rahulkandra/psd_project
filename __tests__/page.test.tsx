import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

test("Page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Flagrant Fowl Futbol Association",
    })
  ).toBeDefined();
  // expect(
  //   screen.getByRole("heading", { level: 2, name: "Organisers" })
  // ).toBeDefined();
  expect(
    screen.getByRole("heading", { level: 3, name: "Points Table" })
  ).toBeDefined();
  expect(screen.getByRole("option", { name: "Select Year" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Go to Dashboard" })).toBeDefined();
  expect(screen.getByRole("link", { name: "Learn More" })).toBeDefined();
});
