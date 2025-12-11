
import logo from "./assets/react.svg"
export default function Header(){
  return(
    <header>
      <img src={logo} alt="logo"/>
      <nav className="nav">
        <h1>ReactFacts</h1>
      </nav>
    </header>
  )
}