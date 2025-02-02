import { Injectable, Inject } from '@nestjs/common';
import { Thread } from '../../domain/entities/thread.entity';
import { IThreadRepository } from '../../domain/repositories/thread.repository.interface';
import { CreateThreadDto } from '../dtos/create-thread.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateThreadUseCase {
  constructor(@Inject('IThreadRepository') private readonly threadRepository: IThreadRepository) {}

  async execute(dto: CreateThreadDto): Promise<Thread> {
    const thread = new Thread(
      randomUUID(),
      dto.question,
      new Date()
    );

    return this.threadRepository.save(thread);
  }
}