import React, { useState } from 'react'

const Ejemplo2 = () => {
    const [friends, setFriends]= useState(["juan","pedro"]);


  return (
    <div>

        {
            friends.map(f =>(
                <li key={Math.random()}>{f}</li>
            ))
        }
      
    </div>
  )
}

export default Ejemplo2
