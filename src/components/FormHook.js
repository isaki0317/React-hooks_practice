import React, {useState} from 'react'

function FormHook() {
  const [name, setName] = useState({firstName: '', lastName: ''});
  return (
    <div>
      <div>
        <p>First Name: - {name.firstName}</p>
        <p>Last Name: - {name.lastName}</p>
      </div>
      <input
        type="text"
        value={name.firstName}
        //入力したタイミングでstateを更新する・useStateでオブジェクトを扱う場合は、スプレッド構文(...)で展開する(展開しないとstateが置換される)
        onChange={e => setName({...name, firstName: e.target.value})}
      />
      <input
        type="text"
        value={name.lastName}
        //入力したタイミングでstateを更新する
        onChange={e => setName({...name, lastName: e.target.value})}
      />
    </div>
  )
}

export default FormHook
