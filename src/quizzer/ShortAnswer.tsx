import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface AnswerProps {
    setAns: (newAns: string) => void;
    ans: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    expectedAnswer: string;
}

function UserAnswer({
    ans,
    setAns,
    answer,
    editAnswer,
    expectedAnswer
}: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
        setAns(event.target.value);
        editAnswer(answer.questionId, {
            ...answer,
            text: event.target.value,
            submitted: true,
            correct: event.target.value === expectedAnswer
        });
    }
    return (
        <span>
            <Form.Group controlId="formAnswer">
                <Form.Control
                    value={ans}
                    onChange={updateAns}
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
    editAnswer
}: {
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    return (
        <div>
            <UserAnswer
                ans={ans}
                setAns={setAns}
                answer={answer}
                editAnswer={editAnswer}
                expectedAnswer={expectedAnswer}
            ></UserAnswer>
            {ans === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
