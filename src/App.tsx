import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import pic from "./Ice Cream.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload (Edited by Vedant Subramanian).
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>Hello World!</p>
            <h1>Ice Cream</h1>
            <img
                src={pic}
                alt="A picture of Ice Cream"
                width="300"
                height="400"
            />
            <p>Ice Cream Flavors</p>
            <ul>
                <li>Chocolate</li>
                <li>Vanilla</li>
                <li>Strawberry</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
