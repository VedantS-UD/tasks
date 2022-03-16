import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface AnswerProps {
    setAns: (newAns: string) => void;
    ans: string;
}

function UserAnswer({ ans, setAns }: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
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
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    return (
        <div>
            <UserAnswer ans={ans} setAns={setAns}></UserAnswer>
            {ans === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
