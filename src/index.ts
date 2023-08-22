import express from "express";
import taskRoutes from "./routes/taskRoutes"; // Import the new router
const app = express();
const port = 3000;

app.use(express.json());

// Use the taskRoutes router for the '/tasks' route
app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;