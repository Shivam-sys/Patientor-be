import diagnosisData from "../../data/diagnoses";
import { Diagnosis } from "../types";

const getAll = (): Diagnosis[] => {
  return diagnosisData;
};

const getDiagnosisDetails = (code: string) => {
  return diagnosisData.find((data) => {
    if (data.code === code) return data;
    return;
  });
};

export { getAll, getDiagnosisDetails };
