import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface ModeProps {
    setMode: (sMode: boolean) => void;
    mode: boolean;
}
interface NameProps {
    setName: (newName: string) => void;
    name: string;
}
interface StudentProps {
    setStudent: (sStudent: boolean) => void;
    isStudent: boolean;
}

function SwitchMode({ mode, setMode }: ModeProps): JSX.Element {
    function updateMode(event: ChangeEvent) {
        setMode(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-mode-check"
                label="Edit Mode?"
                checked={mode}
                onChange={updateMode}
                style={{
                    margin: "auto",
                    width: "fit-content"
                }}
            />
            <div>The user is {mode ? "in edit mode" : "not in edit mode"}.</div>
        </div>
    );
}

function EditName({ name, setName }: NameProps): JSX.Element {
    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formName">
                <Form.Label>Enter Name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updateName}
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "center"
                    }}
                />
            </Form.Group>
        </div>
    );
}

function Student({ isStudent, setStudent }: StudentProps): JSX.Element {
    function updateStudent(event: ChangeEvent) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
                style={{
                    margin: "auto",
                    width: "fit-content"
                }}
            />
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <SwitchMode mode={mode} setMode={setMode}></SwitchMode>
            {mode && (
                <div>
                    <EditName name={name} setName={setName}></EditName>
                    <Student
                        isStudent={isStudent}
                        setStudent={setStudent}
                    ></Student>
                </div>
            )}
            {name} is {isStudent ? "" : "not"} a student.
        </div>
    );
}
