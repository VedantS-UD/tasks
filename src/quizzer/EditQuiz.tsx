import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function EditQuiz({
    quiz,
    deleteQuiz,
    editQuiz,
    changeEditing
}: {
    quiz: Quiz;
    deleteQuiz: (identity: number) => void;
    editQuiz: (identity: number, newQuiz: Quiz) => void;
    changeEditing: () => void;
}): JSX.Element {
    const [name, setName] = useState<string>(quiz.nameQuiz);
    const [description, setDescription] = useState<string>(quiz.description);
    function save() {
        editQuiz(quiz.identity, {
            ...quiz,
            nameQuiz: name,
            description: description
        });
        changeEditing();
    }
    function cancel() {
        changeEditing();
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formQuizName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formQuizDisc" as={Row}>
                        <Form.Label column sm={2}>
                            Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuiz(quiz.identity)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
