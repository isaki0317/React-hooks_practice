import React, {useState} from 'react'

function CounterHook() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  };
  const incrementCountTen = () => {
    for(let i = 0; i < 10; i++) {
      //for文で、+1を10回実行
      //関数形式で値を更新、現在の値を利用し新しい値を返す関数(previousState)
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>カウント + </button>
      <button onClick={incrementCountTen}>カウント +10 </button>
    </div>
  )
}

export default CounterHook
