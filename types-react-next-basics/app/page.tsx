
// function add(x:number,y:number ):number{
//   return x+y;
// }

type buttonStyles = {
  style:React.CSSProperties
}

type ButtonProps ={
  texto:string,
  subtitle?:string,
  bgColor?: "red" | "blue" | "green"
}

// :{texto:string, subtitle?:string}

function Button({style}:buttonStyles){

  // console.log(add(1,3))

  return(
    <button style={style}>Click here</button>
  )
}



export default function Home() {
  return (
   <div>
    <Button style={{
      backgroundColor:"blue",
      color:"white",
      padding:"10px 15px",
    }}/>
   </div>
  );
}
