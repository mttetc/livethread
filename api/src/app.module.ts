import { Module } from '@nestjs/common';
import { AddResponseUseCase } from './application/use-cases/add-response.use-case';
import { CreateThreadUseCase } from './application/use-cases/create-thread.use-case';
import { MemoryThreadRepository } from './infrastructure/repositories/memory.thread.repository';
import { ThreadController } from './presentation/controllers/thread.controller';

@Module({
  controllers: [ThreadController],
  providers: [
    CreateThreadUseCase,
    AddResponseUseCase,
    {
      provide: 'IThreadRepository',
      useFactory: () => MemoryThreadRepository.getInstance()
    }
  ]
})
export class AppModule {}