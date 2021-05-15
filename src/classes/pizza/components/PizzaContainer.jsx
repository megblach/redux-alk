import { useState } from 'react';
import PizzaCalculator from './PizzaCalculator';
import Navigation from './Navigation';
import Title from './Title';
import {useDispatch, useSelector} from 'react-redux';

export default function PizzaContainer() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.name)
    
    const onUserChange = (e) => {
        const action = { type: "CHANGE_USER_NAME", payload: e.target.value }
        dispatch(action);
    }

    return <div>
        <Navigation />
        <div className="userNameSection">
            <label>Your Name :</label>
            <input value={user} onChange={onUserChange}/>

        </div>
        <Title />
        <PizzaCalculator />
    
    </div>
}
