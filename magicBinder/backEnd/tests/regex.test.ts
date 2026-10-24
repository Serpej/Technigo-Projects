import { describe, it, expect } from "vitest";
import { exactlyMatchedRegex } from "../helperFunctions/regex";

describe("exactlyMatchedRegex", () => {
  it("creates a regex string", () => {

    //Arrange
    const testName = "Jesper!";

    //Act
    const actual = exactlyMatchedRegex(testName);

    //Assert
    expect(actual).toBe("Jesper\\!");

  })

})