import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
import { Question } from "../interfaces/question";
import { EditQuestion } from "./EditQuestion";
import { MultipleAnswer } from "./MultipleAnswer";
import { ShortAnswer } from "./ShortAnswer";
function DisplayAnswer({
    question,
    setCorrect
}: {
    question: Question;
    setCorrect: (correct: boolean) => void;
}): JSX.Element {
    if (question.type === "multiple_choice_question") {
        return (
            <MultipleAnswer
                options={question.options}
                expectedAnswer={question.expected}
                setCorrect={setCorrect}
            ></MultipleAnswer>
        );
    } else {
        return (
            <ShortAnswer
                expectedAnswer={question.expected}
                setCorrect={setCorrect}
            ></ShortAnswer>
        );
    }
}

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion,
    answer,
    editAnswer,
    addPoints
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (p: number) => void;
}): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(answer.correct);
    function changeEdit() {
        setEdit(!edit);
    }
    function submit() {
        if (correct) {
            addPoints(question.points);
        }
        editAnswer(answer.questionId, {
            ...answer,
            correct: correct,
            submitted: true
        });
    }
    return edit ? (
        <div>
            <EditQuestion
                question={question}
                deleteQuestion={deleteQuestion}
                editQuestion={editQuestion}
                changeEdit={changeEdit}
            ></EditQuestion>
        </div>
    ) : (
        <div>
            <Button onClick={changeEdit}>Edit Question</Button>
            {question.body}
            <p>
                {question.published ? "Published" : "Not Published"}
                Points: {question.points}
            </p>
            <DisplayAnswer
                question={question}
                setCorrect={setCorrect}
            ></DisplayAnswer>
            <Button disabled={answer.submitted} onClick={submit}>
                Submit
            </Button>
        </div>
    );
}
