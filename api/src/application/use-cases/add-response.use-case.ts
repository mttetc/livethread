import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Response } from '../../domain/entities/thread.entity';
import { IThreadRepository } from '../../domain/repositories/thread.repository.interface';
import { CreateResponseDto } from '../dtos/create-response.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class AddResponseUseCase {
  constructor(@Inject('IThreadRepository') private readonly threadRepository: IThreadRepository) {}

  async execute(threadId: string, dto: CreateResponseDto): Promise<Response> {
    const thread = await this.threadRepository.findById(threadId);
    if (!thread) {
      throw new NotFoundException('Thread not found');
    }

    const response = new Response(
      randomUUID(),
      dto.answer,
      new Date()
    );

    thread.addResponse(response);
    await this.threadRepository.update(thread);

    return response;
  }
}