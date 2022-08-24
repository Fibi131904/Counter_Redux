import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCountAC, resetCountAC } from '../../bll/counterReduser';
import { AppStateType } from '../../bll/store';



export const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStateType, number>(state => state.counter.value);
   // const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);


    const onIncrement = () => {
        dispatch(incrementCountAC())
    }
    const onReset = () => {
        dispatch(resetCountAC())
    }
  
    return (
        <div>
            <div>{value}</div>
            <div >
                <button onClick={onIncrement} >
                    Inc </button>
                <button onClick={onReset}>
                    Reset </button>
            </div >
        </div >
    )

}