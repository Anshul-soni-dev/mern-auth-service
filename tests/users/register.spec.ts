import request from "supertest";
import app from "../../src/app";

describe("POST /auth/register", () => {
    describe("given all fields", () => {
        it("should return the 201 status code", async () => {
            // Arrange
            const userData = {
                firstName: "anshul",
                lastName: "soni",
                email: "anshuls@gamil.com",
                password: "secret",
            };

            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);

            // Assert
            expect(response.status).toBe(201);
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json"),
            );
        });

        it("should persist the user in the database", async () => {
            // Arrange
            const userData = {
                firstName: "anshul",
                lastName: "soni",
                email: "anshuls@gamil.com",
                password: "secret",
            };

            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);

            // Assert
            expect(response.status).toBe(201);
        });
    });
});
