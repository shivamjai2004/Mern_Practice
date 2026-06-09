import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Dashboard =lazy(()=> import('./Component/Dashboard')) 
const Landing = lazy(()=> import('./Component/Landing')) 

export default function App(){
 
  return (
    <>
    <div>NavBar</div>
    {/* <button onClick={function (){
      window.location.href='/landing'
    }}>Landing</button>
    <button onClick={function (){
      window.location.href='/dashboard'
    }}>Dashboard</button> */}
   <BrowserRouter>
   <AppBar></AppBar>
      <Routes>
        <Route path="/landing" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}></Route>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}></Route>
      </Routes>
   </BrowserRouter>
  </>
  )
}

function AppBar(){
   const navigate = useNavigate();
  return (
    <>
     <button onClick={()=>{
      navigate('/landing');
    }}>Landing</button>
    <button onClick={()=>{
      navigate('/dashboard');
    }}>Dashboard</button>
</>
  )
}