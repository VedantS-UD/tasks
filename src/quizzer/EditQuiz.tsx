import React, { useState } from "react";
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
    return <div></div>;
}
