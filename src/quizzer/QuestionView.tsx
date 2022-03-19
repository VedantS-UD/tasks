import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
import { Question } from "../interfaces/question";
import { EditQuestion } from "./EditQuestion";
import { MultipleAnswer } from "./MultipleAnswer";
import { ShortAnswer } from "./ShortAnswer";
function DisplayAnswer({
    question,
    answer,
    editAnswer,
    addPoints
}: {
    question: Question;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (a: Answer) => void;
}): JSX.Element {
    if (question.type === "multiple_choice_question") {
        return (
            <MultipleAnswer
                options={question.options}
                expectedAnswer={question.expected}
                answer={answer}
                editAnswer={editAnswer}
                addPoints={addPoints}
            ></MultipleAnswer>
        );
    } else {
        return (
            <ShortAnswer
                expectedAnswer={question.expected}
                answer={answer}
                editAnswer={editAnswer}
                addPoints={addPoints}
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
    addPoints: (a: Answer) => void;
}): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    function changeEdit() {
        setEdit(!edit);
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
                answer={answer}
                editAnswer={editAnswer}
                addPoints={addPoints}
            ></DisplayAnswer>
        </div>
    );
}
