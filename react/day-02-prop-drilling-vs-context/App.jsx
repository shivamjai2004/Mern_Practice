import { useContext, useState } from "react"
import { CountContext } from "./context";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <CountContext.Provider value={{count, setCount}} >
          <Count />
        </CountContext.Provider>
      </div>    </>
  )
}
function Count() {
  return <>
    <CountRenderer/>
    <Button/>
  </>

}
function CountRenderer() {
  const { count } = useContext(CountContext)
  return <div>
    <div>{count}</div>
  </div>
}
function Button() {

  const {count, setCount} = useContext(CountContext);
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
