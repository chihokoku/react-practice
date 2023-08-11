// エントリポイント
// componentsフォルダーにあるファイルは一度このファイルを介してからimportされる
// これによってimport際の行数を減らせる

export { default as Article } from "./Article"
export { default as Content } from "./Content"
export { default as Title } from "./Title"
export { default as ClickButton } from "./ClickButton"