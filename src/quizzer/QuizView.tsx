import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";

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
                    <i> Questions: </i>
                    {quiz.content.map((q: Question) => (
                        <div key={q.id}>{q.body}</div>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{quiz.description}</p>
                </Col>
            </Row>
        </Container>
    );
}
