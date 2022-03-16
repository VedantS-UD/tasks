import React, { useState } from "react";
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
    return <div></div>;
}
