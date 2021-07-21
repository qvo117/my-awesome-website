import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Counter.css"

/*An interface*/
interface CounterProps {
    //? means that the counterTitle optional
    counterTitle?: string;
}
/*Our component is a counter that takes in a prop interface*/
const Counter: React.FC<CounterProps> = ({counterTitle}) => {
    /*A hook = a special function that let us hook into React features i.e. 
        adding some state to a function component without the need of creating a class.
    
    useState() is a hook that returns the current state and a function that updates the state, which are both constants.
    E.g. Below we initialise a component state var count = 5 and React will keep track of this state 
        and pass the current state to setCount function if it needs to be updated*/
    const [count, setCount] = useState(5); 
    const [title, setCounterTitle] = useState(""); 
    //useEffect() is a hook that redraws every time the component renders/updates.
    useEffect(() => {
        //Checks whether counterTitle has a value or not, !! (double not) evaluates to a boolean
        //If there is a counterTitle, then the component state title is set to this counterTitle
        setCounterTitle(!!counterTitle ? counterTitle : "Some Default Counter");
    }, []);

    /*Decrement function*/
    const decrement = () => {
        setCount(count - 1);
        //console.log("count:", count);
    }
    /*Increment function*/
    const increment = () => {
        setCount(count + 1);
        //console.log("count:", count);
    }

    return <div className="counter-wrapper">
        {/*Render the counter and buttons*/}
        <div className="counter">
            {/*Left button with onclick to the decrement function and content */}
            <button className="counter-btn" onClick={decrement}>
                {"<"}
            </button>
            {/*Print the title state passed by the app.tsx onto the website when count is negative i.e. conditional rendering*/}
            <div className="counter-label">
                {`${count < 0 ? "????" : title}:  ${count}`}
            </div>
            {/*Right button with onclick to the increment function and content*/}
            <button className="counter-btn" onClick={increment}>
                {">"}
            </button>
        </div>

        {/*Render an image underneath the counter if the count value is less than 0*/}
        <div>
            { count < 0 ? <img src={"/DO-NOT-OPEN.png"}></img> : null}
        </div>
    </div>
}

export default Counter;