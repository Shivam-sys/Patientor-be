import express from "express";
import patientsService from "../../services/patientsService";
import toNewPatient from "../../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(patientsService.getPatientsWithoutSSN());
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientsService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const patients = patientsService.getPatients();
  const patient = patients.find((patient) => patient.id === id);
  res.json(patient);
});

export default router;
