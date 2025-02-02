import { Thread } from '../entities/thread.entity';

export interface IThreadRepository {
  save(thread: Thread): Promise<Thread>;
  findById(id: string): Promise<Thread | null>;
  update(thread: Thread): Promise<Thread>;
}