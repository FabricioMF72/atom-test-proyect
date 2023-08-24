import express from "express";
import taskRoutes from "./routes/taskRoutes"; 
import cors from "cors"
import { config } from 'dotenv';

config();
const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;