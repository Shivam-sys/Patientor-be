import express from "express";
import {
  getAll as getAllDiagnosis,
  getDiagnosisDetails,
} from "../../services/diagnosisService";

const router = express.Router();

router.get("/", (_req, res) => {
  const data = getAllDiagnosis();
  res.json(data);
});

router.get("/:code", (req, res) => {
  const code = req.params.code;
  const data = getDiagnosisDetails(code);
  res.json(data);
});

export default router;
