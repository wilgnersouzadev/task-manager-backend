import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async update(id: number, task: Partial<Task>): Promise<void> {
    await this.tasksRepository.update(id, task);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
