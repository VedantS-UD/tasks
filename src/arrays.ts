/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    }
    const bookEnd = [numbers[0], numbers[numbers.length - 1]];
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = (element: number): number => 3 * element;
    const tNumbers = numbers.map(triple);
    return tNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = (element: string): number => parseInt(element);
    const integers = numbers.map(toInt);
    const addZero = (element: number): number => (isNaN(element) ? 0 : element);
    const result = integers.map(addZero);
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remove$ = (element: string): string =>
        element[0] === "$" ? element.substring(1) : element;
    const numbers = amounts.map(remove$);
    const toInt = (element: string): number => parseInt(element);
    const integers = numbers.map(toInt);
    const addZero = (element: number): number => (isNaN(element) ? 0 : element);
    const result = integers.map(addZero);
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = (element: string): string =>
        element[element.length - 1] === "!" ? element.toUpperCase() : element;
    const stuff = messages.map(shout);
    const question = (element: string): boolean =>
        element[element.length - 1] !== "?";
    const answer = stuff.filter(question);
    return answer;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const isShort = (total: number, element: string) =>
        element.length < 4 ? total + 1 : total;
    const result = words.reduce(isShort, 0);
    return result;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const check = (rgb: boolean, element: string) =>
        element === "red" || element === "green" || element === "blue";
    const isRGB = colors.reduce(check, true);
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = (total: number, element: number) => (total += element);
    const add = addends.reduce(sum, 0);
    const result = add + "=" + addends.join("+");
    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 0) {
        return [0];
    }
    let positive = [];
    let index = values.findIndex((val: number): boolean => val < 0);
    if (index === -1) {
        positive = values.slice(0);
        index = values.length - 1;
    } else {
        positive = values.slice(0, index);
    }
    const sum = (total: number, element: number) => (total += element);
    const add = positive.reduce(sum, 0);
    const final = [...values];
    final.splice(index + 1, 0, add);
    return final;
}
