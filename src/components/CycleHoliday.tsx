import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🐲" // Chinese New Year
    | "🎁" // Christmas
    | "🎃" // Halloween
    | "🥧" // Pi Day
    | "🍫"; // World Chocolate Day

// Holiday Dates
//"🐲" Feb
//"🥧" Mar 14
//"🍫" Jul 7
//"🎃" Oct 31
//"🎁" Dec 25

export function CycleHoliday(): JSX.Element {
    const [holiday, nextHoliday] = useState<Holiday>("🐲");
    function alphabet(): void {
        if (holiday === "🐲") {
            nextHoliday("🎁");
        } else if (holiday === "🎁") {
            nextHoliday("🎃");
        } else if (holiday === "🎃") {
            nextHoliday("🥧");
        } else if (holiday === "🥧") {
            nextHoliday("🍫");
        } else {
            nextHoliday("🐲");
        }
    }
    function date(): void {
        if (holiday === "🐲") {
            nextHoliday("🥧");
        } else if (holiday === "🥧") {
            nextHoliday("🍫");
        } else if (holiday === "🍫") {
            nextHoliday("🎃");
        } else if (holiday === "🎃") {
            nextHoliday("🎁");
        } else {
            nextHoliday("🐲");
        }
    }
    const alpha = (
        <div>
            <Button onClick={alphabet}>Advance by Alphabet</Button>
        </div>
    );
    const year = (
        <div>
            <Button onClick={date}>Advance by Year</Button>
        </div>
    );
    const Cycle = (
        <div>
            <span>Holiday: {holiday}</span>
            {alpha}
            {year}
        </div>
    );
    return Cycle;
}
