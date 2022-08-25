import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCountAC, resetCountAC } from '../../bll/counterReduser';
import { AppStateType } from '../../bll/store';
import style from './Counter.module.css'



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
        <div className={style.container}>
            <span className={style.display}>{value}</span>
            <div className={style.btn} >
                <Button onClick={onIncrement} variant="contained" color='primary' size='small' >
                    Inc </Button>
                <Button onClick={onReset} variant="contained" color='primary' size='small'>
                    Reset </Button>
            </div >
        </div >
    )

}