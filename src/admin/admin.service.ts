import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../employees/entity/employee.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { EmployeeCSVRow } from './types/table-row.interface';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Employee)
    private empRepo: Repository<Employee>
  ) {}

  async importEmployeesFromCSV(filePath: string): Promise<any> {
    const rows: any[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          rows.push(row);
        })
        .on('end', () => {
          this.handleCSVRows(
            rows as EmployeeCSVRow[],
            filePath,
            resolve,
            reject
          )
            .then(() => {})
            .catch((error: Error) =>
              reject(new Error(`Error handling CSV rows: ${error?.message}`))
            );
        })
        .on('error', (error) => reject(error));
    });
  }

  private async handleCSVRows(
    rows: EmployeeCSVRow[],
    filePath: string,
    resolve: (value: any) => void,
    reject: (reason?: any) => void
  ) {
    try {
      const results: Employee[] = [];

      for (const row of rows) {
        const emp = new Employee();
        emp.id = row.Matricule;
        emp.fullname = row.NomPrenom;
        emp.fonction = row.fonction;
        emp.departement = row.departement;

        const saved: Employee = await this.empRepo.save(emp);
        results.push(saved);
      }

      fs.unlinkSync(filePath);
      resolve({ inserted: results.length });
    } catch (error) {
      console.error('Error during bulk insert:', error);
      reject(error);
    }
  }
}
