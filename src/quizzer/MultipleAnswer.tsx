import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;
interface AnswerProps {
    selectAns: (cAns: string) => void;
    ans: string;
    options: string[];
}

function SelectAnswer({ ans, selectAns, options }: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
        selectAns(event.target.value);
    }
    return (
        <span>
            <Form.Group controlId="selectAnswer">
                <Form.Select
                    value={ans}
                    onChange={updateAns}
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "center"
                    }}
                >
                    {options.map((a: string) => (
                        <option key={a} value={a}>
                            {a}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </span>
    );
}

export function MultipleAnswer({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [ans, selectAns] = useState<string>(options[0]);
    return (
        <div>
            <SelectAnswer
                ans={ans}
                selectAns={selectAns}
                options={options}
            ></SelectAnswer>
            {ans === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
