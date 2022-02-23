import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, flipType] = useState<QuestionType>("short_answer_question");
    function flip(): void {
        if (type === "multiple_choice_question") {
            flipType("short_answer_question");
        } else {
            flipType("multiple_choice_question");
        }
    }
    const Change = (
        <div>
            <Button onClick={flip}>Change Type</Button>
            {type === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
    return Change;
}
