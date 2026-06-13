import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./Store/atom"
import { useMemo } from "react"

function App() {

  return (
    <>
      <div>
        <RecoilRoot><Count /></RecoilRoot>
      </div>
    </>
  )
}
function Count() {
  console.log("Is re-rendering")

  return <>
    <CountRenderer />
    <Button />
    <IsEven></IsEven>
  </>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <div>{count}</div>
  </div>
}
function Button() {
  const setCount = useSetRecoilState(countAtom);
  console.log("re-render")
  return (<>
    <button onClick={() => {
      setCount(count => count - 1);
    }}>Decrease</button>
    <button onClick={() => {
      setCount(count => count + 1);
    }}>Increase</button>

  </>)

}

function IsEven() {
  let isEven = useRecoilValue(evenSelector);

  // let isEven = useMemo(function () {
  //   return value % 2 == 0;
  // },[value])

  if (isEven) {
    return <div>It is Even</div>
  }
}
export default App
