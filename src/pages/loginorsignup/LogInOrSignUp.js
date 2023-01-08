import { useEffect, useRef, useState } from "react"

//assets
import Google_G_Logo from "../../assets/svgs/Google_G_Logo.svg"
import emailSent from "../../assets/images/email_sent.png"
import Microsoft_Outlook_Logo from "../../assets/svgs/Microsoft_Outlook-Logo.svg"
import Gmail_logo from "../../assets/svgs/Gmail-Logo.svg"

//firebase
import { GoogleAuthProvider } from "firebase/auth";

//react router
import { Link, useLocation, useNavigate } from "react-router-dom"

//auth context
import { useAuth } from "../../context/AuthContext"


const LogInOrSignUp = () => {

  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [mailSent, setMailSent] = useState(false);
  const path = useLocation();
  const navigate = useNavigate();

  const { emailAuth, googleAuth, currentUser } = useAuth();

  useEffect(() => {
    if(currentUser) {
      navigate("/workspaces");
    }
  }, [currentUser])

  //email submittion handler
  const formSubmittionHandler = (e) => {
      emailAuth(emailRef.current.value)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', emailRef.current.value);
        //if put outside the will be executed before the async fun and ofc will created problems
        setMailSent(true);
        setEmail(emailRef.current.value);
      })
      .catch((error) => {
        alert(`error code:${error.code} error message:${error.message}`);
      });
    
    e.preventDefault();
  }

  //goole sign in handler
  const googleSignInHandler = () => {
    googleAuth()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("Google's login success!")
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(`error code: ${errorCode} error msg: ${errorMessage} email: ${email} credential: ${credential}`);
        // ...
      });
  }
  //class
  return (
    <div className="flex items-center justify-center overflow-auto h-screen w-screen bg-slate-100">
      <div className="flex items-center justify-center h-full w-full xl:h-5/6 xl:w-5/6 bg-slate-100 xl:shadow-xl">
        {!mailSent ?
          <div className="relative flex flex-col items-center h-full w-[24rem] bg-slate-100">
            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="text-xl font-squidgy text-slate-800 p-2 select-none py-5">Prototype</h1>
              <h1 className="text-xl font-bold text-slate-900">{path.pathname==="/login"?"Welcome back":"Create your account"}</h1>
              <p className="font-semibold">{path.pathname==="/login"?"Log in to your account and start creating":"then create videos with a single click"}</p>
            </div>
            <div className="relative flex items-center justify-center h-9 w-5/6 bg-slate-100 hover:cursor-pointer rounded-lg border-2 border-slate-200 p-5 focus:shadow-md select-none my-3" onClick={googleSignInHandler}>
              <img className="mx-5 absolute left-0" src={Google_G_Logo} alt="google G logo"></img>
              <h1 className=" text-slate-900 ">Continue with Google</h1>
            </div>
            <div className="relative h-9 w-5/6 flex items-center justify-center">
              <div className="absolute bg-slate-300 h-[0.0625rem] w-5/6"></div>
              <h1 className="absolute bg-slate-100 text-slate-600 text-sm px-5">
                OR
              </h1>
            </div>
            <div className="relative flex flex-col w-5/6">
              <form className="flex flex-col justify-center" onSubmit={formSubmittionHandler}>
                <label className="mb-2 font-semibold text-sm text-slate-700" htmlFor="email">
                  Email Address:
                </label>
                <input ref={emailRef} className="peer appearance-none h-9 w-full py-2 px-3 bg-slate-100 border-2 border-slate-200 focus:outline-none rounded-md text-sm text-slate-600" required maxLength="256" type="email" id="email" placeholder="Enter your email address here" />
                <p className="invisible text-red-500 text-xs mx-3 select-none peer-invalid:visible">The email address is invalid</p>
                <input className="appearance-none border leading-tight focus:outline-none h-9 w-full mt-3 rounded-lg bg-slate-900 text-slate-200 font-semibold text-sm hover:shadow-lg mb-1 hover:cursor-pointer" type="submit" value="Get Magic Link" />
              </form>
              <div className="flex justify-center items-center">
                <p className="text-sm text-slate-400 text-center px-2">we will send you a magic link to sign in</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-5/6 m-4">
              <h1 className="text-center text-sm text-slate-500 py-4 px-10">
                By proceeding, you agree to our
                <a href="#" className="text-sky-600 hover:text-sky-700"> Terms </a>
                and
                <a href="#" className="text-sky-600 hover:text-sky-700"> Privacy Policy </a>
                .
              </h1>
              <h1 className="text-slate-700">
                {path.pathname==="/login"?"Don't have an account?":"Already have an account?"}
                <Link to={path.pathname==="/login"?"/signup":"/login"} className="text-sky-500 hover:text-sky-600">{path.pathname==="/login"?" Create one!":" Sign in"}</Link>
              </h1>
            </div>
          </div>
          : /* email sent component */
          <div className="relative flex flex-col items-center h-full w-[24rem] bg-slate-100">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-squidgy text-slate-800 p-2 select-none py-5">Prototype</h1>
              <img src={emailSent} className="h-36 select-none" alt="email sent image"></img>
              <h1 className="font-semibold text-2xl text-slate-900">Email Sent</h1>
              <p className="text-center px-12 font-medium text-slate-800">We sent an email to you, it contains a magic link that'll sign you in.</p>
            </div>
            <div className="flex justify-center items-center mx-12 mt-6 text-sm text-slate-600">
              <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" target="_blank">
                <div className="border border-slate-300 rounded-l-lg px-6 py-5 flex flex-col jsutify-center items-center hover:cursor-pointer hover:text-sky-600">
                  <img src={Gmail_logo} className="h-10 select-none" alt="google's logo"></img>
                  <h1 className="select-none">Open Gmail</h1>
                </div>
              </a>
              <a href="https://outlook.office365.com/mail/inbox" target="_blank">
                <div className="border border-slate-300 rounded-r-lg px-6 py-5 flex flex-col justify-center items-center hover:cursor-pointer hover:text-sky-600">
                  <img src={Microsoft_Outlook_Logo} className="h-10 select-none" alt="Microsoft Outlook's logo"></img>
                  <h1 className="select-none">Open Outlook</h1>
                </div>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-xs text-slate-500 mx-5">If you do not receive an email within a few minutes, please check your spam folder</p>
              <p className="text-xs text-slate-400 w-56 truncate mt-4">{email}</p>
              <p className="text-sm text-slate-600 w-56 truncate">
                Wrong email? <p className="inline text-sky-500 hover:cursor-pointer" onClick={() => {setMailSent(false); window.location.reload(false)}}>Try again</p>
              </p>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default LogInOrSignUp;