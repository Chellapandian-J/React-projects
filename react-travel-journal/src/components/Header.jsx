import Img from "../assets/globe.jpg"
export default function Header(){
    return(
        <header className="mainheader">
            <img src={Img} alt="logo" width="150"/>
            <h1>My travel Journal</h1>
        </header>
    )
}