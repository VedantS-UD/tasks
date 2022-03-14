import { Question } from "./question";

export interface Quiz {
    identity: number;
    nameQuiz: string;
    description: string;
    content: Question[];
}
