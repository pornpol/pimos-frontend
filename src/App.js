import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const [time, setTime] = useState(new Date());

    return (
        <div className='App'>
            <h1 className='App-header'>{time.toString()}</h1>
        </div>
    );
}

export default App;
