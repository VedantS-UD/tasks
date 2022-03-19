import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;
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
            correct: event.target.value === expectedAnswer,
            submitted: true
        });
        selectAns(options[0]);
        if (event.target.value === expectedAnswer) {
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
            {answer.submitted && (
                <span>
                    {answer.correct ? <span>✔️</span> : <span>❌</span>}
                </span>
            )}
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
