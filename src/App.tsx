import React from 'react';
import { Counter } from './components/counter/Counter';
import { SettingCount } from './components/setting/SettingCount';
import style from './App.module.css'



function App() {
  return (
    <>
    <h1>Counter</h1>
   <div className={style.appContainer}>
   
    <Counter/>
    <SettingCount/>
    </div>
    </>
  );
}

export default App;
