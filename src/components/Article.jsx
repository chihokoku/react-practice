import { useState } from "react"
import { Content, ClickButton, Title } from "./index"

const Article = (props) => {

  // useStateの練習
  const [count, setCount] = useState(0)

  // stateをpropsに渡す練習
  const [answer, setAnswer] = useState("false")
  const Answer = () => {
    setAnswer(true)
  }

  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />

      {/* useStateの基本的な使用方法 */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times!</p>

      {/* stateをpropsに渡す練習 
      　　　　　実際にはAnswer関数が実行されている*/}
      <ClickButton answer={answer} onclick={Answer} />
    </div >
  )
};
export default Article;