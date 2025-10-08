
import { PuffLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <PuffLoader
                color="#00ff2b"
                size={100}
            />
    </div>
  )
}

export default Loading
