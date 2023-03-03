import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // variable donde se almacenara el "dato" de la api
  const [cat, setCat] = useState({})
  // variable para actualizar la informacion que viene de la api
  const [newCat,setNewCat] = useState(false)
  // variable de la api que se va a utilizar
  const api = "https://some-random-api.ml/animal/cat"

  // hook para poder poder almacenar en la variable "cat" la informacion que hay en la variable "api" mediante la funcion "fetch"
  useEffect(()=>{
    fetch(api)
    .then(response => response.json())
    .then(data => {
      setCat(data)
    })
  },[newCat]) // dependencia para actualizar el estado y obtener un nuevo objeto

  return (
    <div className="app-container">
      <div className='card-cat-information'>
        <span className='description-cat'>{cat.fact}</span>
        <img className='img-cat' alt='picture cat' src={cat.image}/>
      </div>
      <button className='newcat-button' onClick={()=> setNewCat(!newCat)}>Next Fact</button>
    </div>
  )
}

export default App
