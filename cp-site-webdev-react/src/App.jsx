import Header from '../src/Components/Header/index.jsx'
import { Outlet } from 'react-router-dom';


function App(){
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
