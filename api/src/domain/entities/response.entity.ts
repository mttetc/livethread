export class Response {
  constructor(
    public readonly id: string,
    public readonly answer: string,
    public readonly createdAt: Date
  ) {}
}