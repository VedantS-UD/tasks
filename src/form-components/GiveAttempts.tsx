import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface GiveProps {
    giveAttempts: (newAtt: number) => void;
    attempts: number;
}
interface UseProps {
    att: number;
    cNumber: () => void;
}

function Use({ cNumber, att }: UseProps): JSX.Element {
    return (
        <Button onClick={cNumber} disabled={att <= 0}>
            use
        </Button>
    );
}

function Gain({ cNumber }: UseProps): JSX.Element {
    return <Button onClick={cNumber}>gain</Button>;
}

function RequestAttempts({ attempts, giveAttempts }: GiveProps): JSX.Element {
    function updateAtt(event: ChangeEvent) {
        giveAttempts(parseInt(event.target.value) || 0);
    }
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attempts}
                    onChange={updateAtt}
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

export function GiveAttempts(): JSX.Element {
    const [attempts, giveAttempts] = useState<number>(0);
    const [att, setAttempt] = useState<number>(3);
    const giveAtt = () => setAttempt(att + attempts);
    const useAtt = () => setAttempt(att - 1);
    return (
        <div>
            <h3>Give Attempts</h3>
            <RequestAttempts
                attempts={attempts}
                giveAttempts={giveAttempts}
            ></RequestAttempts>
            <Use att={att} cNumber={useAtt}></Use>
            <Gain att={att} cNumber={giveAtt}></Gain>
            <div>Currently, there are {att} attempts available.</div>
        </div>
    );
}
