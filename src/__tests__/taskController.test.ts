import app from "../index";
import request from "supertest";
let taskToBeDeleted = '';
let taskToBeUpdated = '';

describe("GET /tasks", () => {
    it("should get all the task and response with 200 status code", async () => {
        const response = await request(app).get('/tasks').send();
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toBeInstanceOf(Array)
    });
});

describe("POST /tasks", () => {
    it("should response with a 201 status code", async () => {
        const body = {
            title: "task1",
            description: "desc1",
            status: "pendiente"
        }
        const response = await request(app).post('/tasks').send(body);
        taskToBeUpdated = response.body.data.id;
        expect(response.statusCode).toBe(201);
    });

    it("should response with a object with an id", async () => {
        const body = {
            title: "task1",
            description: "desc1",
            status: "pendiente"
        }
        const response = await request(app).post('/tasks').send(body);
        taskToBeDeleted = response.body.data.id;
        expect(response.statusCode).toBe(201);
        expect(response.body.data.id).toBeDefined();
    });

    it("should response with a 400 status code if some body property is missing", async () => {
        const body = {
            title: "task1",
            description: "desc1",
        }
        const response = await request(app).post('/tasks').send(body);
        expect(response.statusCode).toBe(400);
    });
});

describe("DELETE /tasks", () => {
    it("should response with a 404 status code if task doesn´t exist", async () => {
        const id = ''
        const response = await request(app).delete(`/tasks/${id}`).send();
        expect(response.statusCode).toBe(404);
    });

    it("should respond with a 200 status code if the task was successfully deleted", async () => {
        const response = await request(app).delete(`/tasks/${taskToBeDeleted}`).send();
        expect(response.statusCode).toBe(200);
    });
});

describe("PUT /tasks", () => {
    it("should response with a 404 status code if task doesn´t exist", async () => {
        const id = ''
        const response = await request(app).put(`/tasks/${id}`).send();
        expect(response.statusCode).toBe(404);
    });

    it("should respond with a 200 status code if the task was successfully updated", async () => {
        const body = {
            title: "titleUpdated",
            description: "descriptionUpdated",
            status: "pendiente"
        }
        const response = await request(app).put(`/tasks/${taskToBeUpdated}`).send(body);
        expect(response.statusCode).toBe(200);
    });

    it("should respond with a 400 status code if some property is missing", async () => {
        const body = {
            title: "titleUpdated",
            description: "descriptionUpdated",
        }
        const response = await request(app).put(`/tasks/${taskToBeUpdated}`).send(body);
        expect(response.statusCode).toBe(400);
    });
});