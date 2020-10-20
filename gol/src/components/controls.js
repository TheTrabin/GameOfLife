import React from "react";

export default function Controls({
    stepThroughAutomata,
    setClickable,
    clickable,
    speedInput,
    setSpeedInput
}) {
    return (
        <div className="controls">
            <h1>Controls:</h1>
            <button onClick = {
                e => {
                    e.preventDefault();
                    stepThroughAutomata();
                }
            }
            >Step 1 Gen</button>
            <input
            placeholder="Speed in Milliseconds"
            value ={speedInput}
            onChange={e => setSpeedInput(e.target.value)} />
            <button onClick ={() => setClickable(prevState => !prevState)}>
                {clickable ? "start" : "stop"}
            </button>
        </div>
    );
}