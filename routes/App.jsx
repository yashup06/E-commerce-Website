import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Homeitem from "../components/Homeitem"
import { useSelector } from "react-redux"
import Fetchitems from "../components/Fetchitems"
import Loadingspinner from "../components/Loadingspinner"


function App() {

   const fetchstatus = useSelector((store) => store.fetchstatus);

  return (
    <>
      <Header/>
      <Fetchitems/>
      {fetchstatus.currentlyfetching ? <Loadingspinner/> :  <Outlet/>}
     
      <Footer/>
    </>
  )
}

export default App
