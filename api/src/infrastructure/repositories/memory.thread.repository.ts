import { Injectable } from '@nestjs/common';
import { Thread } from '../../domain/entities/thread.entity';
import { IThreadRepository } from '../../domain/repositories/thread.repository.interface';

@Injectable()
export class MemoryThreadRepository implements IThreadRepository {
  private static instance: MemoryThreadRepository;
  private threads: Map<string, Thread> = new Map();

  private constructor() {}

  static getInstance(): MemoryThreadRepository {
    if (!MemoryThreadRepository.instance) {
      MemoryThreadRepository.instance = new MemoryThreadRepository();
    }
    return MemoryThreadRepository.instance;
  }

  async save(thread: Thread): Promise<Thread> {
    this.threads.set(thread.id, thread);
    return thread;
  }

  async findById(id: string): Promise<Thread | null> {
    return this.threads.get(id) || null;
  }

  async update(thread: Thread): Promise<Thread> {
    this.threads.set(thread.id, thread);
    return thread;
  }
}