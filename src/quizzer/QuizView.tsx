import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { MultipleAnswer } from "./MultipleAnswer";
import { ShortAnswer } from "./ShortAnswer";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (identity: number) => void;
    editQuiz: (identity: number, newQuiz: Quiz) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <span></span>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.nameQuiz}</h3>
                    <p>{quiz.description}</p>
                    <i> Questions: </i>
                </Col>
            </Row>
            <Row>
                <Col>
                    {quiz.content.map((q: Question) => (
                        <div key={q.id}>
                            {q.body}
                            <div>
                                {q.type === "multiple_choice_question" ? (
                                    <MultipleAnswer
                                        options={q.options}
                                        expectedAnswer={q.expected}
                                    ></MultipleAnswer>
                                ) : (
                                    <ShortAnswer
                                        expectedAnswer={q.expected}
                                    ></ShortAnswer>
                                )}
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
