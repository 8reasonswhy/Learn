import { useState } from "react"

export default function Fruit (){


    const [fruits , setfruits] = useState([])

    const handlesubmit = (e) =>{
        e.preventDefault()

        let nfruit = document.querySelector("#name").value
        setfruits([...fruits,nfruit] )

    }           
    let renderitem = () => {
        return ( fruits.map(item => <li>{item}</li>) )
        console.log (fruits)    
    }



        return (
            <>
            <form>
                <input id="name" placeholder="name of fruit" type="text"></input>
                <input value="Ajouter à la lista" onClick={handlesubmit} type="submit"></input>
            </form>
            <h1>La liste des fruit est :</h1>
            <ul>
                {renderitem()}
            </ul>


            </>
        )
            

}