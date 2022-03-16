import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { EditQuiz } from "./EditQuiz";
import { QuestionList } from "./QuestionList";

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
    const [questions, setQuestions] = useState<Question[]>(quiz.content);
    function editQuestion(id: number, newQuestion: Question) {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.id === id ? newQuestion : question
            )
        );
    }

    function deleteQuestion(id: number) {
        setQuestions(
            questions.filter(
                (question: Question): boolean => question.id !== id
            )
        );
    }

    function addQuestion(newQuestion: Question) {
        const existing = questions.find(
            (question: Question): boolean => question.id !== newQuestion.id
        );
        if (existing === undefined) {
            setQuestions([...questions, newQuestion]);
        }
    }
    return (
        <div>
            <h3>{quiz.nameQuiz}</h3>
            <span>
                <Button onClick={changeEditing}>Edit Quiz</Button>
            </span>
            {editing ? (
                <EditQuiz
                    quiz={quiz}
                    deleteQuiz={deleteQuiz}
                    editQuiz={editQuiz}
                    changeEditing={changeEditing}
                ></EditQuiz>
            ) : (
                <Container>
                    <Row>
                        <Col>
                            <p>{quiz.description}</p>
                            <i> Questions: </i>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <QuestionList
                                questions={quiz.content}
                                deleteQuestion={deleteQuestion}
                                editQuestion={editQuestion}
                            ></QuestionList>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
}
