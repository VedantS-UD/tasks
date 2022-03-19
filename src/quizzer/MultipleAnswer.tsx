import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;
type KeyboardEvent = React.KeyboardEvent<HTMLSelectElement>;
interface AnswerProps {
    selectAns: (cAns: string) => void;
    ans: string;
    options: string[];
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (a: Answer) => void;
}
function SelectAnswer({
    ans,
    selectAns,
    options,
    expectedAnswer,
    answer,
    editAnswer,
    addPoints
}: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
        editAnswer(answer.questionId, {
            ...answer,
            text: event.target.value,
            correct: event.target.value === expectedAnswer
        });
        selectAns(event.target.value);
    }
    function handleSubmit(event: KeyboardEvent) {
        if (event.key === "Enter") {
            selectAns(options[0]);
            editAnswer(answer.questionId, { ...answer, submitted: true });
            addPoints(answer);
        }
    }
    return (
        <span>
            <Form.Group controlId="selectAnswer">
                <Form.Select
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
    editAnswer,
    addPoints
}: {
    options: string[];
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (a: Answer) => void;
}): JSX.Element {
    const [ans, selectAns] = useState<string>(options[0]);

    return (
        <div>
            <SelectAnswer
                ans={ans}
                selectAns={selectAns}
                options={options}
                expectedAnswer={expectedAnswer}
                answer={answer}
                editAnswer={editAnswer}
                addPoints={addPoints}
            ></SelectAnswer>
        </div>
    );
}
