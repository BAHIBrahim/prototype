import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const NotFound = () => {

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000)
  }, [])
  
  return(
    <div className="bg-black h-screen w-screen text-white">
      <div className="flex flex-col items-center justify-center text-center h-full w-full">
        <h1 className="text-xl font-squidgy text-[#FF0800] mb-10 p-2 select-none">Prototype</h1>
        <h1 className="font-bold text-2xl z-50">
          Well Well... Sorry
          <p className="text-[#FF0800] text-5xl"> 404</p>
        </h1>
        <h2 className="z-50 text-lg font-semibold">She is not here!</h2>
        <h2 className="z-50 text-md w-52 font-semibold">I mean the page your are looking for is 
          <p className="inline font-bold text-[#FF0800]"> Not Found</p>!
        </h2>
      </div>
      
    </div>
  )
}

export default NotFound;