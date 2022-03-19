import React from "react";
import { Stack } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
import { Question } from "../interfaces/question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    deleteQuestion,
    editQuestion,
    answers,
    editAnswer,
    addPoints,
    filterPublish
}: {
    questions: Question[];
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    answers: Answer[];
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (p: number) => void;
    filterPublish: boolean;
}): JSX.Element {
    if (filterPublish) {
        const filteredQuestions = questions.filter(
            (question: Question): boolean => question.published
        );
        return (
            <Stack gap={1}>
                {filteredQuestions.map((q: Question) => (
                    <div key={q.id} className="bg-light border m-2 p-2">
                        <QuestionView
                            question={q}
                            deleteQuestion={deleteQuestion}
                            editQuestion={editQuestion}
                            answer={
                                answers[
                                    answers.findIndex(
                                        (a: Answer) => q.id === a.questionId
                                    )
                                ]
                            }
                            editAnswer={editAnswer}
                            addPoints={addPoints}
                        ></QuestionView>
                    </div>
                ))}
            </Stack>
        );
    }
    return (
        <Stack gap={1}>
            {questions.map((q: Question) => (
                <div key={q.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={q}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                        answer={
                            answers[
                                answers.findIndex(
                                    (a: Answer) => q.id === a.questionId
                                )
                            ]
                        }
                        editAnswer={editAnswer}
                        addPoints={addPoints}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
