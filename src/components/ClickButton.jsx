export default function ClickButton(props) {
  return (
    <div className="Container">
      <h2>stateをpropsに渡す練習</h2>
      <button onClick={() => props.onclick()}>
        Click state: {props.answer.toString()}
      </button>
    </div>

  );
}