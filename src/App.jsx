import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/Profile'
import ProductList from './components/ProductList'
import MyButton from './components/MyButton'


function App() {
  
  const [count, setCount] = useState(0)

  function setCounter(){
      setCount(count+1)
  }

  return (
    <div>

        <h1>Welcome to my app</h1>

        <h2>Profile Example</h2>
        <hr/>
        <Profile/>

        <br/>
        <h2>List of Products</h2>
        <hr/>
        <ProductList/>
        
        <br/>
        <h2>But that not Share data between components</h2>
        <hr/>
        <MyButton/>
        <MyButton/>

        <h2>Sharing data between components</h2>
        <hr/>
        <SharingDataBetweenButtonComponents count={count} onClick={setCounter}/>
        
        <SharingDataBetweenButtonComponents count={count} onClick={setCounter}/>
        
    </div>
  )
}

function SharingDataBetweenButtonComponents({count, onClick}){
  return(
    <div>
      <button onClick={onClick}>Clicked {count} times</button>
    </div>
  )

}

export default App
