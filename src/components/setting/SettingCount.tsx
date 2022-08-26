import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxValueAC, setStartValueAC, setValuesAC } from '../../bll/counterReduser';
import { AppStateType } from '../../bll/store';
import style from './SettingCount.module.css'


export const SettingCount = () => {

    const dispatch = useDispatch();
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);

    const onClickSetStartValue = (value:number) => {
        dispatch(setStartValueAC(value))
    }

    const onClickSetMaxValue = (value:number) => {
        dispatch(setMaxValueAC(value))
    }
    const onClickSetValues =()=>{
        dispatch(setValuesAC())
    }
    const condition = maxValue < 0
        || startValue < 0
        || startValue > maxValue
        || maxValue === startValue

    return (
        <div className={style.container}>
            <div className={style.settingsBlock}>
                <div className={style.settings}>
                    <span>MinValue</span>
                    <input value={startValue} type='number' onChange={(e) => { onClickSetStartValue(+e.currentTarget.value) }} />
                </div>
                <div className={style.settings}>
                    <span>MaxValue</span>
                    <input value={maxValue} type='number' onChange={(e) => { onClickSetMaxValue(+e.currentTarget.value) }} />
                </div>
            </div>


            <div className={style.btn}>
                <Button disabled={startValue === maxValue || maxValue === 0 || condition} onClick={onClickSetValues} variant="contained" color='primary' size='small' >
                    Set </Button>
            </div>

        </div >
    )
}