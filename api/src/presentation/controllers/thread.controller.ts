import { Controller, Get, Post, Body, Param, NotFoundException, Inject } from '@nestjs/common';
import { CreateThreadUseCase } from '../../application/use-cases/create-thread.use-case';
import { AddResponseUseCase } from '../../application/use-cases/add-response.use-case';
import { CreateThreadDto } from '../../application/dtos/create-thread.dto';
import { CreateResponseDto } from '../../application/dtos/create-response.dto';
import { IThreadRepository } from '../../domain/repositories/thread.repository.interface';

@Controller('api/threads')
export class ThreadController {
  constructor(
    private readonly createThreadUseCase: CreateThreadUseCase,
    private readonly addResponseUseCase: AddResponseUseCase,
    @Inject('IThreadRepository') private readonly threadRepository: IThreadRepository
  ) {}

  @Post()
  async createThread(@Body() dto: CreateThreadDto) {
    return this.createThreadUseCase.execute(dto);
  }

  @Get(':id')
  async getThread(@Param('id') id: string) {
    const thread = await this.threadRepository.findById(id);
    if (!thread) {
      throw new NotFoundException('Thread not found');
    }
    return thread;
  }

  @Post(':id/responses')
  async addResponse(
    @Param('id') id: string,
    @Body() dto: CreateResponseDto
  ) {
    return this.addResponseUseCase.execute(id, dto);
  }
}