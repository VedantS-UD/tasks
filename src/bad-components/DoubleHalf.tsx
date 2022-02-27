import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Arithmetic {
    cNumber: () => void;
}

function Doubler({ cNumber }: Arithmetic): JSX.Element {
    return <Button onClick={cNumber}>Double</Button>;
}

function Halver({ cNumber }: Arithmetic): JSX.Element {
    return <Button onClick={cNumber}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => setDhValue(2 * dhValue);
    const halve = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler cNumber={double}></Doubler>
            <Halver cNumber={halve}></Halver>
        </div>
    );
}
