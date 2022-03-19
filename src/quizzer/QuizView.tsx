import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Answer } from "../interfaces/answer";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { makeAnswers, sumPoints, sumPublishedPoints } from "../nested";
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
    const [answers, setAnswers] = useState<Answer[]>(makeAnswers(quiz.content));
    const [totalPoints, setTotalPoints] = useState<number>(0);
    function changeEditing() {
        setEditing(!editing);
    }
    function filter() {
        setFilterPublish(!filterPublish);
    }
    function addPoints(a: Answer) {
        const index = questions.findIndex(
            (q: Question) => q.id === a.questionId
        );
        setTotalPoints(totalPoints + questions[index].points);
    }
    function reset() {
        setAnswers(makeAnswers(questions));
        setTotalPoints(0);
    }
    function editAnswer(questionId: number, newAnswer: Answer) {
        setAnswers(
            answers.map(
                (answer: Answer): Answer =>
                    answer.questionId === questionId ? newAnswer : answer
            )
        );
    }
    function editQuestion(id: number, newQuestion: Question) {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.id === id ? newQuestion : question
            )
        );
        //
    }
    function deleteQuestion(id: number) {
        setQuestions(
            questions.filter(
                (question: Question): boolean => question.id !== id
            )
        );
    }
    // function addQuestion(newQuestion: Question) {
    //     const existing = questions.find(
    //         (question: Question): boolean => question.id !== newQuestion.id
    //     );
    //     if (existing === undefined) {
    //         setQuestions([...questions, newQuestion]);
    //     }
    // }
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
                    <span>{questions.length} Questions</span>
                    <i> Questions: </i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <QuestionList
                        questions={questions}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                        answers={answers}
                        editAnswer={editAnswer}
                        addPoints={addPoints}
                        filterPublish={filterPublish}
                    ></QuestionList>
                    <Button onClick={filter}>Filter</Button>
                    Points:
                    {filterPublish
                        ? totalPoints +
                          " out of " +
                          sumPublishedPoints(questions)
                        : totalPoints + " out of " + sumPoints(questions)}
                    <Button onClick={reset}>Reset</Button>
                </Col>
            </Row>
        </Container>
    );
}
