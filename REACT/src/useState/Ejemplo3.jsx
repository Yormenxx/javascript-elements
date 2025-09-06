import React from 'react'
import { useState } from 'react'
const Ejemplo3 = () => {

    const [movie,setMovie]= useState({
        title:"Inception",
        rating:9
    })


    const handleRating=()=>{
        setMovie({
            ...movie,
            rating:6
        })
    }
  return (
    <div>

        <h1>Tile:{movie.title}</h1>
        <h2>Rating:{movie.rating}</h2>

        <button onClick={handleRating}>Change rating</button>


    </div>
  )
}

export default Ejemplo3
