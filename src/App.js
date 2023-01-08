import { Route, Routes } from "react-router-dom"
import Home from "./pages/homepage/Home"
import LogInOrSignUp from "./pages/loginorsignup/LogInOrSignUp"
import NotFound from "./pages/notfound/NotFound"
import WorkSpaces from "./pages/workspaces/WorkSpaces"
import { AuthProvider } from "./context/AuthContext"
import VideoPlayer from "./features/videoPlayer/VideoPlayer"
import Test from "./Test.js"

const App = () => {

  return(
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LogInOrSignUp />}/>
        <Route path="/signup" element={<LogInOrSignUp />}/>
        <Route path="/workspaces" element={<WorkSpaces/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/videoPlayer" element={<VideoPlayer/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </AuthProvider>
    
  )
}

export default App;