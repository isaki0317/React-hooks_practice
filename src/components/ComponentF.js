import React, { useContext } from 'react'
import { LanguageContext, UserContext} from '../App'

//useContextの引数にproviderで囲った値(App.js)を渡すことで、変数に代入する事ができる
const user = useContext(UserContext)
const language = useContext(LanguageContext)

function ComponentF() {
  return (
    <div>
      {/* useContextを使って変数に代入した場合 */}
　　　<div>{user.name}: {language}</div>

      {/* useContextを使わない場合(App.jsの記述は変わらない) */}
      {/* propsで多重構造で受け渡さなくても、App.jsで定義したdataを、Contextで参照できる */}
      {/* <UserContext.Consumer>
        {
          user => {
            return(
              <LanguageContext.Consumer>
                {
                  language => {
                    return <div>{user.name}: {language}</div>
                  }
                }
              </LanguageContext.Consumer>
            )
          }
        }
      </UserContext.Consumer> */}
    </div>
  )
}

export default ComponentF
