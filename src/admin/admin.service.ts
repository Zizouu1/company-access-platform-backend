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
    if (!filePath || !fs.existsSync(filePath)) {
      throw new Error('File path is invalid or file does not exist');
    }

    return new Promise((resolve, reject) => {
      const rows: any[] = [];

      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => rows.push(row))
        .on('end', () => {
          this.handleCSVRows(rows as EmployeeCSVRow[], filePath)
            .then((result) => resolve(result))
            .catch((error) =>
              reject(error instanceof Error ? error : new Error(String(error)))
            );
        })
        .on('error', (error) => reject(error));
    });
  }

  private async handleCSVRows(
    rows: EmployeeCSVRow[],
    filePath: string
  ): Promise<any> {
    const results: Employee[] = [];
    let duplicates = 0;
    let errors = 0;

    try {
      for (const row of rows) {
        try {
          const existing = await this.empRepo.findOne({
            where: { id: row.Matricule },
          });

          if (existing) {
            duplicates++;
            continue;
          }

          const emp = new Employee();
          emp.id = row.Matricule;
          emp.nom = row.Nom;
          emp.prenom = row.Prenom;
          emp.site = row.Site;

          const saved = await this.empRepo.save(emp);
          results.push(saved);
        } catch (rowError) {
          console.error(`Error processing row ${row.Matricule}:`, rowError);
          errors++;
        }
      }

      try {
        fs.unlinkSync(filePath);
      } catch (unlinkError) {
        console.error('Error deleting file:', unlinkError);
      }

      return {
        inserted: results.length,
        duplicates,
        errors,
      };
    } catch (error) {
      try {
        fs.unlinkSync(filePath);
      } catch (unlinkError) {
        console.error('Error deleting file:', unlinkError);
      }
      throw error;
    }
  }
}
