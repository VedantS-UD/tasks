import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { sumPoints, sumPublishedPoints } from "../nested";
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
    const [filterPublish, setFilterPublish] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>(quiz.content);
    function changeEditing() {
        setEditing(!editing);
    }
    function filter() {
        setFilterPublish(!filterPublish);
    }
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
    return editing ? (
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
                    <h3>{quiz.nameQuiz}</h3>
                    <p>
                        {quiz.description}
                        <Button onClick={changeEditing}>Edit Quiz</Button>
                    </p>
                    <i> Questions: </i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <QuestionList
                        questions={questions}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                        filterPublish={filterPublish}
                    ></QuestionList>
                    <Button onClick={filter}>Filter</Button>
                    Total Points:
                    {filterPublish
                        ? sumPublishedPoints(questions)
                        : sumPoints(questions)}
                </Col>
            </Row>
        </Container>
    );
}
