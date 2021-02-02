import React, { useState, useEffect } from 'react'

function EffectHook() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  //初回レンダリング時、更新時に呼び出される(レンダリングの最後い発火)
  useEffect(() => {
    document.title = `クリック数: ${count} 回`
    console.log('render')
  },[count])
  //useEffect第二引数：条件を追加できる(最適化)、[]の中に記述した条件の時のみ実行(初回render時のみ実行は[]のみ記述)

  return (
    <div>
      <p>クリック数：{count}回</p>
      <p>名前: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e => setName(e.target.value))}
        />
      <button onClick={() => setCount(count + 1)}>カウント + </button>
    </div>
  )
}

export default EffectHook
