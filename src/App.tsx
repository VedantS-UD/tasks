import React from "react";
import "./App.css";
import pic from "./IceCream.jpg";
import { HideTasks } from "./quizzer/HideTasks";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br></br>Quizzer Development in Progress
            </header>
            <Quizzer></Quizzer>
            <h1>Sketch</h1>
            <img
                src={pic}
                alt="A picture of Ice Cream"
                width="300"
                height="400"
            />
            <h2>Completed Features</h2>
            <ul>
                <li>View Quizzes</li>
                <li>View Questions</li>
                <li>Respond to Questions</li>
                <li>Edit Quiz (Partial)</li>
                <li>Edit Questions (Partial)</li>
                <li>Filter Quiz Published</li>
                <li>See Total Points</li>
            </ul>
            <HideTasks></HideTasks>
        </div>
    );
}

export default App;
