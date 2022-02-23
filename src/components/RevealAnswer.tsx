import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [vis, setVis] = useState<boolean>(false);
    function invis(): void {
        setVis(!vis);
    }
    const Answer = (
        <div>
            <Button onClick={invis}>Reveal Answer</Button>
            {vis && <div>42</div>}
        </div>
    );
    return Answer;
}
