import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface ColorProps {
    setColor: (sColor: string) => void;
    color: string;
}
const COLORS = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];
const DEFAULT_COLOR = COLORS[0];
function ColorList({ color, setColor }: ColorProps): JSX.Element {
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            {COLORS.map((clr: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    key={clr}
                    value={clr}
                    onChange={updateColor}
                    id="choose-color-"
                    {...clr}
                    label={clr.charAt(0).toUpperCase() + clr.slice(1)}
                    checked={color === clr}
                />
            ))}
        </div>
    );
}
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    return (
        <div>
            <h3>Change Color</h3>
            <ColorList color={color} setColor={setColor}></ColorList>
            You have chosen {color}.
        </div>
    );
}
