import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const getPublish = (q: Question): boolean => q.published;
    const pubQuestions = questions.filter(getPublish);
    return pubQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const getFull = (q: Question): boolean =>
        !(q.body === "" && q.expected === "" && q.options.length === 0);
    const notEmpty = questions.filter(getFull);
    return notEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const getID = (q: Question): boolean => q.id === id;
    const match = questions.filter(getID)[0];
    if (match === undefined) {
        return null;
    }
    return match;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const getID = (q: Question): boolean => q.id !== id;
    const rest = questions.filter(getID);
    return rest;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const getName = (q: Question): string => q.name;
    const names = questions.map(getName);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const getPoints = (total: number, q: Question) => (total += q.points);
    const sum = questions.reduce(getPoints, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const isPub = (q: Question): boolean => q.published;
    const pubQuestions = questions.filter(isPub);
    const getPoints = (total: number, q: Question) => (total += q.points);
    const sum = pubQuestions.reduce(getPoints, 0);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const getCSV = (q: Question): string =>
        q.id +
        "," +
        q.name +
        "," +
        q.options.length +
        "," +
        q.points +
        "," +
        q.published;
    const CSV = questions.map(getCSV);
    const values = "id,name,options,points,published\n" + CSV.join("\n");
    return values;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const getAnswer = (q: Question): Answer => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false
    });
    const answers = questions.map(getAnswer);
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const pubAll = (q: Question): Question => ({ ...q, published: true });
    const pubQuestions = questions.map(pubAll);
    return pubQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const qType = questions[0].type;
    const typeMatch = (q: Question): boolean => q.type === qType;
    const sType = questions.every(typeMatch);
    return sType;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const nQuestion = makeBlankQuestion(id, name, type);
    const addQuestion = [...questions, nQuestion];
    return addQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const index = questions.findIndex(
        (element: Question): boolean => element.id === targetId
    );
    const changeQuestion = { ...questions[index], name: newName };
    const nArray = [...questions];
    nArray.splice(index, 1, changeQuestion);
    return nArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const index = questions.findIndex(
        (element: Question): boolean => element.id === targetId
    );
    const changeQuestion = { ...questions[index], type: newQuestionType };
    if (changeQuestion.type !== "multiple_choice_question") {
        changeQuestion.options = [];
    }
    const nArray = [...questions];
    nArray.splice(index, 1, changeQuestion);
    return nArray;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    const index = questions.findIndex(
        (element: Question): boolean => element.id === targetId
    );
    let changeQuestion = questions[index];
    if (targetOptionIndex === -1) {
        changeQuestion = {
            ...changeQuestion,
            options: [...changeQuestion.options, newOption]
        };
    } else {
        changeQuestion = {
            ...changeQuestion,
            options: [...changeQuestion.options]
        };
        changeQuestion.options.splice(targetOptionIndex, 1, newOption);
    }
    const nArray = [...questions];
    nArray.splice(index, 1, changeQuestion);
    return nArray;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index = questions.findIndex(
        (element: Question): boolean => element.id === targetId
    );
    const dupQuestion = duplicateQuestion(newId, questions[index]);
    const nArray = [...questions];
    nArray.splice(index + 1, 0, dupQuestion);
    return nArray;
}
