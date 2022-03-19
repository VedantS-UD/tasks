import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface AnswerProps {
    setAns: (newAns: string) => void;
    ans: string;
    expectedAnswer: string;
    setCorrect: (correct: boolean) => void;
}

function UserAnswer({
    ans,
    setAns,
    expectedAnswer,
    setCorrect
}: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
        setCorrect(event.target.value === expectedAnswer);
        setAns(event.target.value);
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
    setCorrect
}: {
    expectedAnswer: string;
    setCorrect: (correct: boolean) => void;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    return (
        <div>
            <UserAnswer
                ans={ans}
                setAns={setAns}
                expectedAnswer={expectedAnswer}
                setCorrect={setCorrect}
            ></UserAnswer>
        </div>
    );
}
