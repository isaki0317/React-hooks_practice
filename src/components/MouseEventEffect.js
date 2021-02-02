import React, { useEffect, useState} from 'react'

function MouseEventEffect() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = e => {
    console.log('getMousePosition')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    //初回render時のみ実行([])
    console.log('useEffect')
    window.addEventListener('mousemove', getMousePosition)
    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, [])

  return (
    <div>
      <ul>
        <li>x座標： {x}</li>
        <li>y座標： {y}</li>
      </ul>
    </div>
  )
}

export default MouseEventEffect
