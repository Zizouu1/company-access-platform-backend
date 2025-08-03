import { Request } from 'express';

export interface EmployeeCSVRow extends Request {
  Matricule: string;
  NomPrenom: string;
  fonction: string;
  site: string;
}
