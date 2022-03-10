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
                    id={clr}
                    label={clr.charAt(0).toUpperCase() + clr.slice(1)}
                    checked={color === clr}
                />
            ))}
        </div>
    );
}
function TextColor({ color }: { color: string }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "25px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        >
            {color}
        </div>
    );
}
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    return (
        <div>
            <h3>Change Color</h3>
            <ColorList color={color} setColor={setColor}></ColorList>
            You have chosen <TextColor color={color}></TextColor>.
        </div>
    );
}
