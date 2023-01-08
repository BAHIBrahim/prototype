import { Link } from "react-router-dom";

const Header = (props) => {



  return (
    <div className="sticky top-0 right-0 left-0 z-50 flex items-center justify-center bg-slate-100 w-full h-16">
      <div className="flex justify-center items-center absolute left-0 gap-8">
        <a href="#" className="mx-4">
          <h1 className="text-xl font-squidgy text-slate-800 p-2 select-none">Prototype</h1>
        </a>
        <div className="container lg:flex hidden gap-1">
          <a className="text-lg hover:text-slate-900 text-slate-600 font-semibold rounded-lg py-1 px-2 whitespace-nowrap " href="#">Resources</a>
          <a className="text-lg hover:text-slate-900 text-slate-600 font-semibold rounded-lg py-1 px-2 whitespace-nowrap" href="#">Use Cases</a>
          <a className="text-lg hover:text-slate-900 text-slate-600 font-semibold rounded-lg py-1 px-2 whitespace-nowrap" href="#">For Business</a>
          <a className="text-lg hover:text-slate-900 text-slate-600 font-semibold rounded-lg py-1 px-2 whitespace-nowrap" href="#">More</a>
        </div>
      </div>
      <div className="absolute right-0 hidden sm:flex items-center gap-4 mx-4">
        <a className="text-lg hover:text-slate-900 text-slate-600 font-semibold rounded-lg whitespace-nowrap mr-2 xl:mr-4" href="#">Contact Us</a>
        <Link className="outline outline-slate-300 outline-offset-[-0.125rem] text-slate-800 font-bold py-1 px-3 my-2 rounded-md hover:bg-slate-200 hover:outline-slate-200" to="/login">Login</Link>
        <Link className="bg-slate-800 text-slate-100 font-bold py-1 px-3 my-2 rounded-md hover:bg-slate-700 whitespace-nowrap" to="signup">Sign up</Link>
      </div>
    </div>
  )
}

export default Header;