import Header from "./Header"
import Footer from "./Footer"
import Filler from "../../components/Filler"
import rollfilmImg from "../../assets/images/rollfilm.jpg"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"

const Home = () => {

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  console.log("home was reached")

  useEffect(() => {
    if(currentUser) {
      navigate("/workspaces")
    }
  }, [currentUser]) 

  return (

    <div className="bg-slate-100">
      <Header/>
      {/* Hero Section */}
      <div className="flex justify-center items-center text-white bg-slate-600 h-96">
        <div className="relative bg-slate-700 w-[64rem] h-full">
          <img src={rollfilmImg} alt="rollfilm image" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex justify-center items-center flex-col gap-3">
            <p className="text-white font-bold text-5xl sm:text-6xl text-center whitespace-nowrap">
              Video editing
            </p>
            <p className="text-white text-4xl sm:text-5xl font-normal text-center whitespace-nowrap">
              made simple
            </p>
          </div>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex justify-center items-center gap-8">
            <button className="outline outline-black text-black font-bold outline-offset-[-0.125rem] w-40 h-10 rounded-full py-2 shadow-none hover:shadow-2xl">Try a Sample</button>
            <button className="bg-black w-40 h-10 rounded-full py-2 font-semibold shadow-none hover:shadow-2xl">Upload Your Video</button>
          </div>
        </div>
      </div>
      <Filler/>
      <Filler/>
      <Filler/>
      <Filler/>
      <Footer/>
      
    </div>
  );
}

export default Home;
