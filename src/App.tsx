import React from 'react';
import { Counter } from './components/counter/Counter';
import { SettingCount } from './components/setting/SettingCount';
import style from './App.module.css'



function App() {
  return (
    <div className={style.App}>
      <div className={style.title}>
        <h1>Counter</h1>
      </div>
      <div className={style.appContainer}>
        <Counter />
        <SettingCount />
      </div>
    </div>

  );
}

export default App;
