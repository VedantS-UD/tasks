import React from "react";
import { Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;
interface AnswerProps {
    options: string[];
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (a: Answer) => void;
}
function SelectAnswer({
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
        if (event.target.value === expectedAnswer) {
            addPoints(answer);
        }
    }
    return (
        <span>
            <Form.Group controlId="selectAnswer">
                <Form.Select
                    disabled={answer.submitted}
                    value={answer.text}
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
    return (
        <div>
            <SelectAnswer
                options={options}
                expectedAnswer={expectedAnswer}
                answer={answer}
                editAnswer={editAnswer}
                addPoints={addPoints}
            ></SelectAnswer>
        </div>
    );
}
