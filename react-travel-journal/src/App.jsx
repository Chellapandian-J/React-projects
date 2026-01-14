import Header from "./components/Header.jsx"
import Maincomponent from "./components/Maincomponent.jsx"
import data from "./components/data.js"
export default function App(){
    const mainelements=data.map((item)=>{
        return(
            <Maincomponent
            key={item.id}
            {...item}
            />
        )
    })
    return(
        <main>
            <Header/>
            {mainelements}
        </main>
    )
}