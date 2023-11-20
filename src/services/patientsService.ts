import patients from "../../data/patients";
import { v1 as uuid } from "uuid";
import { NewPatientEntry, Patient, PatientWithoutSSN } from "../types";

const getPatients = (): Patient[] => {
  return patients;
};

const getPatientsWithoutSSN = (): PatientWithoutSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    id: String(uuid()),
    ...entry,
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  addPatient,
  getPatientsWithoutSSN,
};
