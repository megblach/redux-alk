import { ShowCount } from './ShowCount'
import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const onIncrement = () => {
        setCount(count + 1)
    }

    const onIncrement2 = () => {
        setCount2(count2 + 1)
    }


    const onDecrement = () => {
        if(count >= 1) {
            setCount(count - 1)
        }
        
    }

    const onDecrement2 = () => {
        if(count2 >= 1) {
            setCount2(count2 - 1)
        }
        
    }


    return (
        <>
        <ShowCount count={count} count2={count2} />

        <button onClick={onIncrement}>Increment</button>
        <button onClick={onIncrement2}>Increment2</button>

        <br></br>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onDecrement2}>Decrement2</button>


        </>
        )

}