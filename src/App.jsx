import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

// memo... propsに変更がない限りここでは再レンダリングされない
export const App = memo(() => {
  console.log("Appレンダリング");

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  // 関数のメモ化
  // 第一引数に関数、第二引数に監視対象の値（ここでは空の配列[]なので、関数は最初に読まれたものが使いま回される）
  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>

      {/* propsとして関数を設定 */}
      <Child1 onClickReset={onClickReset}></Child1>
      <Child4></Child4>
    </>
  );
});
