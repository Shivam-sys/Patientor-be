import express from "express";
import cors from "cors";
import diagnosesRouter from "../src/routes/api/diagnoses";
import patientsRouter from "./routes/api/patients";

const app = express();
app.use(express.json());
const PORT = 3001;

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get("/api/ping", (_req, res) => {
  res.send("Pong");
});

app.use("/api/diagnosis", diagnosesRouter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
