import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [value1, rollD1] = useState<number>(1);
    const [value2, rollD2] = useState<number>(6);
    const leftDice = (
        <div>
            <Button onClick={() => rollD1(d6())}>Roll Left</Button>
        </div>
    );
    const rightDice = (
        <div>
            <Button onClick={() => rollD2(d6())}>Roll Right</Button>
        </div>
    );
    const TwoDice = (
        <div>
            {leftDice}
            {rightDice}
            <div>
                <span data-testid="left-die">{value1}</span>
                <span data-testid="right-die">{value2}</span>
                {value1 !== value2 ? (
                    <span>Again</span>
                ) : value1 !== 1 ? (
                    <span>Win!</span>
                ) : (
                    <span>Lose!</span>
                )}
            </div>
        </div>
    );
    return TwoDice;
}
