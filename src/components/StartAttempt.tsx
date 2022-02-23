import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, addAttempt] = useState<number>(4);
    const [progress, inProgress] = useState<boolean>(false);
    function nAttempt(): void {
        addAttempt(attempt - 1);
        inProgress(!progress);
    }
    const beginQuiz = (
        <div>
            {attempt}
            <Button onClick={nAttempt} disabled={progress || attempt === 0}>
                Start Quiz
            </Button>
        </div>
    );
    const endQuiz = (
        <div>
            <Button onClick={() => inProgress(!progress)} disabled={!progress}>
                Stop Quiz
            </Button>
        </div>
    );
    const mull = (
        <div>
            <Button onClick={() => addAttempt(attempt + 1)} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
    const Attempt = (
        <div>
            {beginQuiz}
            {endQuiz}
            {mull}
        </div>
    );
    return Attempt;
}
