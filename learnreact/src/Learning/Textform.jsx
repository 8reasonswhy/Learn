import { useState } from "react"

export default function Textform (){
    const [nom,setnom]=useState()
    const [age , setage]= useState()  
    const setle9lawi = () => {
        const nom = document.querySelector("#name").value
        const age = document.querySelector("#age").value
        setnom(nom)
        setage(age)
    } 
    const handlsubmit = (e)=> {
        e.preventDefault()
        setle9lawi()
        console.log ({
            nom ,
            age
        })

    }

    return ( 
    <div>
        <form>
            <input type="text" id="name" placeholder="smaytake a zabi" ></input>
            <input type = "number" id="age" placeholder="age a toubi"></input>
            <input type ="submit" onClick={handlsubmit} value="Validez a l9lawi"></input>        
        </form>
    
    </div> 
    
        
    )
}