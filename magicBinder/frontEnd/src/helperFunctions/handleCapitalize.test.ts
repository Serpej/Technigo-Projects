import { describe, it, expect } from "vitest";
import { capitalize } from "./handleCapitalize";

describe("capitalize", () => {
  it("capitalizes the first letter of a lowercase word", () => {
    // Arrange
    const input = "magic";

    // Act
    const result = capitalize(input);

    // Assert
    expect(result).toBe("Magic");
  });

  it("leaves an already capitalized word unchanged", () => {
    expect(capitalize("Binder")).toBe("Binder");
  });

  it("capitalizes a single letter", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("does not change the rest of the word", () => {
    expect(capitalize("mTG")).toBe("MTG");
  });

  it("returns an empty string when given an empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
