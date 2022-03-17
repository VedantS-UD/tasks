import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;
interface AnswerProps {
    selectAns: (cAns: string) => void;
    ans: string;
    options: string[];
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    expectedAnswer: string;
}

function SelectAnswer({
    ans,
    selectAns,
    options,
    answer,
    editAnswer,
    expectedAnswer
}: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
        selectAns(event.target.value);
        editAnswer(answer.questionId, {
            ...answer,
            text: event.target.value,
            submitted: true,
            correct: event.target.value === expectedAnswer
        });
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
    expectedAnswer,
    answer,
    editAnswer
}: {
    options: string[];
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
}): JSX.Element {
    const [ans, selectAns] = useState<string>(options[0]);
    return (
        <div>
            <SelectAnswer
                ans={ans}
                selectAns={selectAns}
                options={options}
                answer={answer}
                editAnswer={editAnswer}
                expectedAnswer={expectedAnswer}
            ></SelectAnswer>
            {ans === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
