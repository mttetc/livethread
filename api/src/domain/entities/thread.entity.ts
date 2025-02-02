export class Thread {
  constructor(
    public readonly id: string,
    public readonly question: string,
    public readonly createdAt: Date,
    public readonly responses: Response[] = []
  ) {}

  addResponse(response: Response): void {
    this.responses.push(response);
  }

  toJSON() {
    return {
      id: this.id,
      question: this.question,
      createdAt: this.createdAt,
      responses: this.responses
    };
  }
}

export class Response {
  constructor(
    public readonly id: string,
    public readonly answer: string,
    public readonly createdAt: Date
  ) {}
}