import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function EditQuestion({
    question,
    deleteQuestion,
    editQuestion,
    changeEdit
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    changeEdit: () => void;
}): JSX.Element {
    const [body, setBody] = useState<string>(question.body);
    const [expected, setExpected] = useState<string>(question.expected);
    const [options, setOptions] = useState<string[]>(question.options);
    const [published, setPublished] = useState<boolean>(question.published);
    const [points, setPoints] = useState<number>(question.points);
    function save() {
        editQuestion(question.id, {
            ...question,
            body: body,
            expected: expected,
            options: options,
            published: published,
            points: points
        });
        changeEdit();
    }
    function cancel() {
        changeEdit();
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formQuestionBody" as={Row}>
                        <Form.Label column sm={2}>
                            Body:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={body}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setBody(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formQuestionExpected" as={Row}>
                        <Form.Label column sm={2}>
                            Expected:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={expected}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setExpected(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-Published-check"
                        label="Publish?"
                        checked={published}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setPublished(event.target.checked)}
                        style={{
                            margin: "auto",
                            width: "fit-content"
                        }}
                    />
                    <Form.Group controlId="formQuestionPoints" as={Row}>
                        <Form.Label column sm={2}>
                            Points:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setPoints(parseInt(event.target.value) || 0)
                                }
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
                        onClick={() => deleteQuestion(question.id)}
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
