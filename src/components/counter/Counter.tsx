
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCountAC, resetCountAC } from '../../bll/counterReduser';
import { AppStateType } from '../../bll/store';
import style from './Counter.module.css'



export const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector<AppStateType, number>(state => state.counter.value);
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const [etiteMode] = useState(false)


    const onIncrement = () => {
        dispatch(incrementCountAC())
    }
    const onReset = () => {
        dispatch(resetCountAC())
    }
    const condition = maxValue < 0
        || startValue < 0
        || startValue > maxValue
        || maxValue === startValue

    return (
        <div className={style.container}>
            <span className={style.display}>{value}</span>
            <div className={style.btn} >
                {condition ?
                    <div className={style.error}>Incorrect Value!</div> : ''}
                <Button onClick={onIncrement} variant="contained" color='primary' size='small'
                    disabled={etiteMode || value === maxValue} >
                    Inc </Button>
                <Button onClick={onReset} variant="contained" color='primary' size='small'
                    disabled={etiteMode || value === startValue} >

                    Reset </Button>
            </div >
        </div >
    )

}