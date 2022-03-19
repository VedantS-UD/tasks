import React, { useState } from "react";
import QuizData from "../data/quizzes.json";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "./QuizList";

const { POKEMON_QUIZ, GEO_QUIZ, CS_QUIZ }: Record<string, Quiz> =
    QuizData as Record<string, Quiz>;
const QUIZZES = [POKEMON_QUIZ, GEO_QUIZ, CS_QUIZ];
export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    function editQuiz(identity: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map(
                (quiz: Quiz): Quiz =>
                    quiz.identity === identity ? newQuiz : quiz
            )
        );
    }

    function deleteQuiz(identity: number) {
        setQuizzes(
            quizzes.filter((quiz: Quiz): boolean => quiz.identity !== identity)
        );
    }

    // function addQuiz(newQuiz: Quiz) {
    //     const existing = quizzes.find(
    //         (quiz: Quiz): boolean => quiz.identity === newQuiz.identity
    //     );
    //     if (existing === undefined) {
    //         setQuizzes([...quizzes, newQuiz]);
    //     }
    // }
    return (
        <div>
            <h3>Quizzer</h3>
            <b>Only One Shot [Press Enter to Submit]</b>
            <QuizList
                quizzes={quizzes}
                editQuiz={editQuiz}
                deleteQuiz={deleteQuiz}
            ></QuizList>
        </div>
    );
}
