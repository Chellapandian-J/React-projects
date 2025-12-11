import { createRoot } from "react-dom/client"
import "./index.css";
import Header from "./Header"
import MainComponent from "./MainComponent"
import Footer from "./Footer"
const root=createRoot(document.getElementById("root"))

function Comp(){
  return(
    <main className="page">
    <Header/>
    <MainComponent/>
    <Footer/>
    </main>
  )
}


root.render(
    <Comp/>
)

