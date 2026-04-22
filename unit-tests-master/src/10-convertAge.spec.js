import  {convertAge} from "./10-convertAge"

describe("10-convertAge", () => {

  it("Should convert the age to the number of days", () => {
    expect(convertAge(1)).toEqual(364)
  });
})