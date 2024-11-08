import { describe, expect, it } from "vitest";
import app from "../index.js";

describe("server", () => {
  it("should be defined", () => {
    expect(app).toBeDefined();
  });

  it("truth check", () => {
    expect(true).toBe(true);
  });
});
