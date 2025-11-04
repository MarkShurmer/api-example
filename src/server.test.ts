import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/server";

describe("API", () => {
  it("returns health message", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello from API example");
  });
});
