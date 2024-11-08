import App from "@/App";
import { describe, expect, it } from "vitest";

describe("app", () => {
  it("should be defined", () => {
    expect(App).toBeDefined();
  });

  it("truth check", () => {
    expect(true).toBe(true);
  });
});
