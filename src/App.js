import './App.css';
// エントリポイントを介すことでimportの行数を減らせる
import { Article, Title, Content } from './components/index';

export default function App() {
  return (

    <div>
      {/* 3個表示される 実際はmapで繰り返し処理されるのがほとんど*/}
      <Title
        title={"エントリポイント"}
      />
      <Content
        content={"エントリポイントの練習をしています"}
      />
      <Article
        title={"新しいreact"}
        content={"初めてpropsを使います"}
      />
      <Article
        title={"2番目に新しいreact"}
        content={"初めてpropsを使います"}
      />
    </div>
  );
}

