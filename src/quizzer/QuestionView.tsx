import React from "react";
import { Question } from "../interfaces/question";
import { DisplayQuestion } from "./DisplayQuestion";

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion,
    filterPublish
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    filterPublish: boolean;
}): JSX.Element {
    return (
        <DisplayQuestion
            question={question}
            deleteQuestion={deleteQuestion}
            editQuestion={editQuestion}
            filterPublish={filterPublish}
        ></DisplayQuestion>
    );
}
