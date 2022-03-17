import React from "react";
import { Stack } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    deleteQuestion,
    editQuestion,
    filterPublish
}: {
    questions: Question[];
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    filterPublish: boolean;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((q: Question) => (
                <div key={q.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={q}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                        filterPublish={filterPublish}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
