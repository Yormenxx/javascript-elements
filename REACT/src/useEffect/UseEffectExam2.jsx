import { useState, useEffect } from "react"

const UseEffectExam2 = () => {

    const [post,setPost]  =useState([]);

    useEffect(()=>{

        const fetchData =  async()=>{
            const data = await fetch('https://jsonplaceholder.typicode.com/posts');
            const res = await data.json();
            setPost(res);
        }

        fetchData();

    },[])

  return (
    <div>

        <ul>
            {
                post.map(p =>(
                    <li key={p.id}>
                          <h2>{p.title}</h2>  
                          <p>{p.body}</p>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default UseEffectExam2
