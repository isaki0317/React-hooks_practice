import React, { useContext, createContext, useState } from 'react';
import './App.css';
import CounterReducer from './components/CounterReducer'

// export const UserContext = createContext()
// export const LanguageContext = createContext()

function App() {
  const [user, setUser] = useState({name: 'matsuo', age: '22'})
  const [language, setLanguage] = useState('日本語')
  return (
    <div className="App">
      {/* コンポーネントを囲って記述することで、囲ったファイル内で使用可能にする(複数ならネスト) */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC/>
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      <CounterReducer/>
    </div>
  );
}

export default App;
