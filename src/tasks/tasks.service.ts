import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/database/entities/task.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(task: CreateTaskDto, user: User): Promise<Task> {
    const foundUser = await this.usersRepository.findOne({
      where: { email: user.email },
    });

    const newTask = this.tasksRepository.create({
      ...task,
      user: foundUser,
    });
    return this.tasksRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find({ relations: ['user'] });
  }

  async findByUser(userId: number): Promise<Task[]> {
    return this.tasksRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
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
