import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { EditQuestion } from "./EditQuestion";
import { MultipleAnswer } from "./MultipleAnswer";
import { ShortAnswer } from "./ShortAnswer";
function DisplayAnswer({ question }: { question: Question }): JSX.Element {
    if (question.type === "multiple_choice_question") {
        return (
            <MultipleAnswer
                options={question.options}
                expectedAnswer={question.expected}
            ></MultipleAnswer>
        );
    } else {
        return <ShortAnswer expectedAnswer={question.expected}></ShortAnswer>;
    }
}
export function QuestionView({
    question,
    deleteQuestion,
    editQuestion
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
}): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);

    function changeEdit() {
        setEdit(!edit);
    }
    return (
        <div>
            <Button onClick={changeEdit}>Edit Question</Button>
            {question.body}
            <p>
                {question.published ? "Published" : "Not Published"}
                Points: {question.points}
            </p>
            {edit ? (
                <EditQuestion
                    question={question}
                    deleteQuestion={deleteQuestion}
                    editQuestion={editQuestion}
                    changeEdit={changeEdit}
                ></EditQuestion>
            ) : (
                <div>
                    <DisplayAnswer question={question}></DisplayAnswer>
                </div>
            )}
        </div>
    );
}
