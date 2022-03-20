import React from "react";
import { Form } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
interface AnswerProps {
    expectedAnswer: string;
    answer: Answer;
    editAnswer: (questionId: number, newAnswer: Answer) => void;
    addPoints: (a: Answer) => void;
}

function UserAnswer({
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
    }
    function handleSubmit(event: KeyboardEvent) {
        if (event.key === "Enter") {
            editAnswer(answer.questionId, { ...answer, submitted: true });
            if (answer.correct) {
                addPoints(answer);
            }
        }
    }
    return (
        <span>
            <Form.Group controlId="formAnswer">
                <Form.Control
                    disabled={answer.submitted}
                    value={answer.text}
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
            {answer.submitted && (
                <span>
                    {answer.correct ? <span>✔️</span> : <span>❌</span>}
                </span>
            )}
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
    return (
        <div>
            <UserAnswer
                expectedAnswer={expectedAnswer}
                answer={answer}
                editAnswer={editAnswer}
                addPoints={addPoints}
            ></UserAnswer>
        </div>
    );
}
