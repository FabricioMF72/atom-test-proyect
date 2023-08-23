import express from "express";
import taskRoutes from "./routes/taskRoutes"; 
const app = express();
const port = 3000;

app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;