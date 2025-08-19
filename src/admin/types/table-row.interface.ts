import { Request } from 'express';

export interface EmployeeCSVRow extends Request {
  Matricule: string;
  Nom: string;
  Prenom: string;
  Site: string;
}
