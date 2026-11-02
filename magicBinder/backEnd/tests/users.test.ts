import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { app } from "../app";
import { User } from "../models/User";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /users", () => {
  it("Creates a user and returns 201 with user data, checks that password is not equal to the posted password.", async () => {

    //Arrange
    const body = {
      name: "validTestName",
      email: "validTest@Emailtest.com",
      password: "validTestPassword123",
    }

    //Act
    const response = await request(app).post("/users").send(body);

    //Assert
    const user = await User.findOne({ email: body.email }).lean();

    if(user === null) {
      throw new Error("User was not saved")
    };

    expect(response.status).toBe(201);

    expect(response.body).toMatchObject({
      success: true,
      message: "User created",
      name: body.name,
      email: body.email,
    });

    expect(response.body).not.toHaveProperty("password");

    expect(user).toMatchObject({
      name: body.name,
      email: body.email,
    });

    expect(user.password).not.toBe(body.password);
  });
});