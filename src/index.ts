import express, { Request, Response } from "express";
import cors from "cors";
import connectDatabase from "./configs/db";
import dotenv from "dotenv";

connectDatabase();

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/health", (req: Request, res: Response) => {
    return res.status(200).send("")
});

const port = process.env.PORT

app.listen(port, () => console.log(`Server running in port ${port}`));

export default app;