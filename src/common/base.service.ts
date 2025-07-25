import { Repository, FindOptionsWhere, DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class BaseService<T extends { id: number }> {
  constructor(protected readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<T | null> {
    return await this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async update(id: number, data: QueryDeepPartialEntity<T>): Promise<T | null> {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
