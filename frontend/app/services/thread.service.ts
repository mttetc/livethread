import { Injectable, signal } from '@angular/core';
import { Thread } from '../models/thread.model';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from 'app/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private readonly API_URL = typeof window !== 'undefined' ? 
    `${window.location.protocol}//${window.location.host}/api/threads` : 
    'http://localhost:3000/api/threads';
  
  // Use signals for reactive state management
  currentThread = signal<Thread | null>(null);

  constructor(private http: HttpClient) {}

  async createThread(question: string): Promise<Thread> {
    const thread = await firstValueFrom(
      this.http.post<Thread>(this.API_URL, { question })
    );
    this.currentThread.set(thread);
    return thread;
  }

  async getThread(id: string): Promise<Thread | null> {
    try {
      const thread = await firstValueFrom(
        this.http.get<Thread>(`${this.API_URL}/${id}`)
      );
      this.currentThread.set(thread);
      return thread;
    } catch (error) {
      this.currentThread.set(null);
      return null;
    }
  }

  async addResponse(threadId: string, answer: string): Promise<Response | null> {
    try {
      const response = await firstValueFrom(
        this.http.post<Response>(`${this.API_URL}/${threadId}/responses`, { answer })
      );
      // Fetch the updated thread to get the latest state
      await this.getThread(threadId);
      return response;
    } catch (error) {
      return null;
    }
  }
}