import { useState } from "react"

export default function MyButton(){

    const [count, setCount] = useState(0)

    function setCounter(){
        setCount(count+1)
    }

    return(
        <button onClick={setCounter}>Clicked {count} times</button>
        
    )
}