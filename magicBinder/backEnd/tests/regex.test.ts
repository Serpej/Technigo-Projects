import { describe, it, expect } from "vitest";
import { exactlyMatchedRegex } from "../helperFunctions/regex";

describe("exactlyMatchedRegex", () => {
  it("returns a RegExp with the case-insensitive flag", () => {
    // Act
    const actual = exactlyMatchedRegex("Black Lotus");

    // Assert
    expect(actual).toBeInstanceOf(RegExp);
    expect(actual.flags).toBe("i");
  });

  it("matches the exact same string", () => {
    const regex = exactlyMatchedRegex("Black Lotus");

    expect(regex.test("Black Lotus")).toBe(true);
  });

  it("matches regardless of letter case", () => {
    const regex = exactlyMatchedRegex("Black Lotus");

    expect(regex.test("black lotus")).toBe(true);
    expect(regex.test("BLACK LOTUS")).toBe(true);
  });

  it("does not match partial strings", () => {
    const regex = exactlyMatchedRegex("Black Lotus");

    expect(regex.test("Lotus")).toBe(false);
    expect(regex.test("Black Lotus Extra")).toBe(false);
    expect(regex.test("The Black Lotus")).toBe(false);
  });

  it("escapes special characters so they are matched literally", () => {
    const regex = exactlyMatchedRegex("Fire (Ice)");

    expect(regex.test("Fire (Ice)")).toBe(true);
    expect(regex.test("Fire Ice")).toBe(false);
  });

  it("treats a dot as a literal dot, not 'any character'", () => {
    const regex = exactlyMatchedRegex("a.b");

    expect(regex.test("a.b")).toBe(true);
    expect(regex.test("axb")).toBe(false);
  });

  it("only matches an empty string when given an empty string", () => {
    const regex = exactlyMatchedRegex("");

    expect(regex.test("")).toBe(true);
    expect(regex.test("anything")).toBe(false);
  });
});
