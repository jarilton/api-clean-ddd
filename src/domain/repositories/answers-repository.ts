import { Answer } from "../antities/answer";

export interface AnswersRepository {
  create(answer: Answer): Promise<void>;
}
