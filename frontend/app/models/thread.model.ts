import { Response } from "./response.model";

export interface Thread {
  id: string;
  question: string;
  createdAt: Date;
  responses: Response[];
}
