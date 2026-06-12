import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "./Store/atom"

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
    <CountRenderer/>
    <Button/>
  </>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <div>{count}</div>
  </div>
}
function Button() {
  const [count,setCount] = useRecoilState(countAtom);
  return (<>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count - 1);
    }}>Decrease</button>
  </>)

}
export default App
