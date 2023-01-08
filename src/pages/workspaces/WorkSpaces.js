import Filler from "../../components/Filler"
import WorkspaceHeader from "./WorkSpaceHeader"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// mui icons 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import ContentCutRoundedIcon from '@mui/icons-material/ContentCutRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import StreamRoundedIcon from '@mui/icons-material/StreamRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LockIcon from '@mui/icons-material/Lock';
import ReceiptIcon from '@mui/icons-material/Receipt';

//mui splinner
import CircularProgress from '@mui/material/CircularProgress';

//context
import { useAuth } from "../../context/AuthContext";



const WorkSpaces = () => {

  const [workspaceSettingsClicked, setWorkspaceSettingsClicked] = useState(false);
  const [newVideoClicked, setNewVideoClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useAuth();
  const navigate = useNavigate();


  // if the currentUser is loaded within 2 seconds it will redirect to the login page 
  useEffect(() => {
    if(currentUser) {
      setLoading(false);
      console.log(currentUser)
      return
    } else {
      setTimeout(() => {
        navigate("/login");
        return
      }, 10000)
    }
    
  }, [currentUser])
  
  return (
    loading?
    // spinner
    <div className="flex items-center justify-center h-screen w-screen">
      <CircularProgress className="text-6xl"></CircularProgress>
    </div>
    :
    <div className="flex items-center justify-between h-screen w-screen bg-slate-100">
      {/* Sidebar */}
      <div className="relative flex flex-col items-center py-6 h-screen w-auto min-w-max bg-white rounded-3xl overflow-auto">
        {/* Workspace settings */}
        {workspaceSettingsClicked ?
          // When clicked
          <>
            {/* the shady background */}
            <div onContextMenu={(e) => {setWorkspaceSettingsClicked(false); e.preventDefault()}} className="fixed top-0 left-0 z-40 h-screen w-screen bg-black bg-opacity-30" onClick={() => setWorkspaceSettingsClicked(false)}></div>
            {/* Secondary container */}
            <div className="absolute z-50">
              {/* An empty div to mimic the width and height of the title */}
              <div className="h-11 w-60" onContextMenu={(e) => {setWorkspaceSettingsClicked(false); e.preventDefault()}} onClick={() => setWorkspaceSettingsClicked(false)}></div>
              {/* the main container */}
              <div className="flex flex-col bg-white rounded-2xl w-full">
                {/* WS-workspace-settings Header */}
                <div className="flex items-center h-16 rounded-lg mt-3 mx-2 p-1 hover:bg-slate-100 hover:cursor-pointer" onClick={() => setWorkspaceSettingsClicked(false)}>
                  <div className="flex items-center justify-center h-14 w-14 bg-green-500 rounded-lg text-white font-bold text-lg select-none">
                    S
                  </div>
                  <div className="relative flex items-center h-full w-44">
                    <div className="flex flex-col justify-center mx-4 select-none">
                      <h1 className="text-base font-semibold">studio</h1>
                      <h1 className="text-sm font-semibold text-slate-400">Free Plan</h1>
                    </div>
                    <ArrowDropDownIcon className="absolute right-0 "></ArrowDropDownIcon>
                  </div>
                </div>
                {/* WS Menu section */}
                <div className="flex flex-col w-full p-2 rounded text-slate-800">
                  <div className="flex items-center hover:bg-slate-100 rounded-md m-2 py-1 px-2 hover:cursor-pointer select-none">
                    <SettingsIcon className="mr-3"></SettingsIcon>
                    <div className="text-sm font-semibold">
                      Workspace Settings
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-slate-100 rounded-md m-2 py-1 px-2 hover:cursor-pointer select-none">
                    <PeopleAltIcon className="mr-3"></PeopleAltIcon>
                    <div className="text-sm font-semibold">
                      Collaborators
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-slate-100 rounded-md m-2 py-1 px-2 hover:cursor-pointer select-none">
                    <LockIcon className="mr-3"></LockIcon>
                    <div className="text-sm font-semibold">
                      Privacy & SSO
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-slate-100 rounded-md m-2 py-1 px-2 hover:cursor-pointer select-none">
                    <ReceiptIcon className="mr-3"></ReceiptIcon>
                    <div className="text-sm font-semibold">
                      Workspace Billing
                    </div>
                  </div>
                </div>
                {/* Other WS */}
                <div className="flex items-center h-12 rounded-b-2xl border-t-2 border-slate-200 text-sm mx-2 font-semibold">
                  <div className="mr-10 ml-3 text-slate-600">
                    Other Workspaces
                  </div>
                  <div className="flex items-center rounded-lg hover:bg-slate-200 text-slate-700 hover:text-slate-900 hover:cursor-pointer px-2 py-1 select-none">
                    <h1 className="">New</h1>
                    <AddRoundedIcon className="" sx={{ fontSize: 20 }}></AddRoundedIcon>
                  </div>
                </div>
              </div>
            </div>
          </>
          : null
          }
        {/* // when it is not clicked */}
        <h1 className="text-lg font-squidgy h-12 w-60 text-slate-800 p-2 select-none hover:cursor-pointer">Prototype</h1>
        <div className="flex items-center h-16 rounded-lg my-3 mx-3 p-1 hover:bg-slate-100 hover:cursor-pointer" onClick={() => setWorkspaceSettingsClicked(true)}>
          <div className="flex items-center justify-center h-14 w-14 bg-green-500 rounded-lg text-white font-bold text-lg select-none">
            S
          </div>
          <div className="relative flex items-center h-full w-44">
            <div className="flex flex-col justify-center mx-4 select-none">
              <h1 className="text-base font-semibold">studio</h1>
              <h1 className="text-sm font-semibold text-slate-400">Free Plan</h1>
            </div>
            <ArrowDropDownIcon className="absolute right-0 "></ArrowDropDownIcon>
          </div>
        </div>
        {/* Menu buttons */}
        <div className="flex flex-col w-56">
            {/* New Video Button */}
            <div className="">
              <div className="relative z-40 flex items-center h-12 w-56 bg-sky-500 hover:bg-sky-600 shadow hover:shadow-lg rounded-xl p-4 hover:cursor-pointer mt-1 mb-2" onClick={() => setNewVideoClicked((prev) => !prev)}>
                <div className="font-semibold select-none text-white">
                  New Video
                </div>
                <AddRoundedIcon className="absolute right-4 text-white"></AddRoundedIcon>
              </div>
              {newVideoClicked ?
                <>
                  {/* the shady background */}
                  <div onContextMenu={(e) => {setNewVideoClicked(false); e.preventDefault()}} className="fixed top-0 left-0 z-30 h-screen w-screen bg-black bg-opacity-30" onClick={() => setNewVideoClicked(false)}></div>
                  <div className="absolute flex flex-col items-center z-40 w-56 h-[13.5rem] pt-2 bg-white rounded-2xl">
                    {/* project type: Create Video Project */}
                    <div className="flex items-center h-10 w-52 px-2 py-6 mx-2 mb-1 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 hover:cursor-pointer">
                      <ContentCutRoundedIcon className="text-purple-600 hover:text-purple-600" sx={{fontSize: 16}}></ContentCutRoundedIcon>
                      <h1 className="ml-4 text-sm font-medium">Create Project</h1>
                    </div>
                    {/* project type: Video Recorder */}
                    <div className="flex items-center h-10 w-52 px-2 py-6 mx-2 mb-1 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 hover:cursor-pointer">
                      <VideocamRoundedIcon className="text-orange-600 hover:text-orange-600" sx={{fontSize: 20}}></VideocamRoundedIcon>
                      <h1 className="ml-3 text-sm font-medium">Start Recording</h1>
                    </div>
                    {/* project type: Live Stream */}
                    <div className="flex items-center h-10 w-52 px-2 py-6 mx-2 mb-2 hover:bg-slate-100 rounded-lg text-slate-600 hover:text-slate-900 hover:cursor-pointer">
                      <StreamRoundedIcon className="text-sky-600 hover:text-sky-600" sx={{fontSize: 20}}></StreamRoundedIcon>
                      <h1 className="ml-3 text-sm font-medium">Go Live</h1>
                    </div>
                    <div className="flex items-center w-full h-full border-t-2 border-slate-100 hover:border-slate-200 hover:bg-slate-100 rounded-b-2xl text-slate-500 text-sm font-medium hover:cursor-pointer hover:text-slate-900">
                      <h1 className="ml-4 mr-14">Explore Templates</h1>
                      <AutoAwesomeMosaicRoundedIcon sx={{fontSize: 19}}></AutoAwesomeMosaicRoundedIcon>
                    </div>
                  </div>
                </>
                :
                null
              }
            </div>
            {/* Home */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer my-1">
              <HomeRoundedIcon></HomeRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                Home
              </div>
            </div>
            {/* Templates */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer my-1">
              <AutoAwesomeMosaicRoundedIcon></AutoAwesomeMosaicRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                Templates
              </div>
            </div>
            {/* All Videos */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer mt-1 mb-3">
              <FolderRoundedIcon></FolderRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                All Videos
              </div>
            </div>
            {/* Projects */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer my-1">
              <ContentCutRoundedIcon></ContentCutRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                Projects
              </div>
            </div>
            {/* Recordings */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer my-1">
              <VideocamRoundedIcon></VideocamRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                Recordings
              </div>
            </div>
            {/* Live Stream */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer mt-1 mb-3">
              <StreamRoundedIcon></StreamRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                Live Stream
              </div>
            </div>
            {/* Brand Kit */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer my-1">
              <StyleRoundedIcon></StyleRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                Brand Kit
              </div>
            </div>
            {/* Recycler */}
            <div className="flex items-center h-12 w-full hover:bg-slate-100 rounded-xl p-4 hover:cursor-pointer mt-1">
              <DeleteRoundedIcon></DeleteRoundedIcon>
              <div className="ml-3 font-semibold select-none">
                Recycler
              </div>
            </div>
        </div>
      </div>
      {/* Workspaces */}
      <div className="h-full w-full min-w-[42rem] bg-slate-50 overflow-auto">
        <WorkspaceHeader/>
        <Filler/>
        <Filler/>
        <Filler/>
        <Filler/>
      </div>
    </div>
  )
}

export default WorkSpaces;