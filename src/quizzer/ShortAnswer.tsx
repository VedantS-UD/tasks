import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
interface AnswerProps {
    setAns: (newAns: string) => void;
    ans: string;
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (a: Answer) => void;
}

function UserAnswer({
    ans,
    setAns,
    expectedAnswer,
    answer,
    editAnswer,
    addPoints
}: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
        setAns(event.target.value);
        editAnswer(answer.questionId, {
            ...answer,
            text: event.target.value,
            correct: event.target.value === expectedAnswer
        });
    }
    function handleSubmit(event: KeyboardEvent) {
        if (event.key === "Enter") {
            setAns("");
            editAnswer(answer.questionId, { ...answer, submitted: true });
            addPoints(answer);
        }
    }
    return (
        <span>
            <Form.Group controlId="formAnswer">
                <Form.Control
                    disabled={answer.submitted}
                    value={ans}
                    onChange={updateAns}
                    onKeyDown={handleSubmit}
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "center"
                    }}
                />
            </Form.Group>
        </span>
    );
}

export function ShortAnswer({
    expectedAnswer,
    answer,
    editAnswer,
    addPoints
}: {
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (a: Answer) => void;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    return (
        <div>
            <UserAnswer
                ans={ans}
                setAns={setAns}
                expectedAnswer={expectedAnswer}
                answer={answer}
                editAnswer={editAnswer}
                addPoints={addPoints}
            ></UserAnswer>
        </div>
    );
}
