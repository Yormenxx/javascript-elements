import React, { useState } from 'react'

const Ejemplo4 = () => {
    const [movies ,setMovies] = useState([
        {id:1 ,title:"Inception", rating: 9},
        {id:2 ,title:"Interstellar", rating: 8.5},
        {id:3 ,title:"The Dark Knight", rating: 9.5}
    ])

    const handleName =()=>{
        setMovies(movies.map(m => m.id === 1 ? {...m,title:"Inception 2 upgrade" } : m))
    }


  return (
    <div>
        {
            movies.map((m,index)=>(
                <li key={index}>{m.title}</li>
            ))
        }

        <button onClick={handleName}>Change name</button>
      
    </div>
  )
}

export default Ejemplo4
