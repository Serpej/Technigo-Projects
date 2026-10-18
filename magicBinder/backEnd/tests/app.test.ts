import  request from "supertest";
import { describe, it, expect } from "vitest";
import { app } from "../app"

describe("app", () => {

  it("GET/ returns 200 and root message", async () => {

    //Arrange & Act
    const response = await request(app).get("/");

    //Assert 1
    expect(response.status).toBe(200);

    //Assert 2
    expect(response.body).toEqual({ message: "Root Path" });
  });

})