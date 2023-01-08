import { useState } from "react";

// mui icons
import SearchIcon from "@mui/icons-material/Search";
import BoltIcon from '@mui/icons-material/Bolt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';

//assets
import user_avatar from "../../assets/images/user_avatar.png"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const WorkSpaceHeader = () => {

  const [accountSettingsClicked, setAccountSettingsClicked] = useState(false);
  const [searchBarClicked, setSearchBarClicked] = useState(false);

  const { signOutHandler, currentUser } = useAuth();
  const navigate = useNavigate(); 

  const signOutClicked = () => {
    signOutHandler()
      .then(() => {
        console.log("logout success!")
        return (
          <div>
            {navigate("/login")}
          </div>
        )
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      })
  }

  return (
    <div className="relative flex items-center justify-between h-16 w-full rounded-xl">
      {/* Search bar */}
      <div className="ml-4 mr-2 lg:mr-4 h-10 w-[24rem]">
        {searchBarClicked ?
          <>
            {/* the shady background */}
            <div onContextMenu={(e) => {setSearchBarClicked(false); e.preventDefault()}} className="fixed top-0 left-0 z-40 h-screen w-screen bg-black bg-opacity-30" onClick={() => setSearchBarClicked(false)}></div>
            {/* Search bar */}
            <div className="relative flex items-center z-50 px-4 bg-white h-full w-full rounded-lg" onClick={() => setSearchBarClicked(true)}>
              <SearchIcon className="mr-4 text-sky-400"></SearchIcon>
              <input type="text" placeholder="What are you looking for..." className="placeholder:truncate w-full outline-none bg-transparent placeholder-slate-500 text-sm" autoFocus></input>
            </div>
          </>
          :
          <div className="flex items-center justify-start px-4 h-full w-full text-sm bg-slate-200 text-slate-500 hover:text-slate-600 hover:bg-slate-200 rounded-lg hover:cursor-pointer select-none overflow-hidden" onClick={() => setSearchBarClicked(true)}>
            <SearchIcon className="mr-4"></SearchIcon>
            <div className="w-full truncate">
              Search videos and folders
            </div>
          </div>
        }
      </div>
      {/* User info and more */}
      <div className="flex items-center  mx-6 h-10 min-w-fit">
        <div className="flex items-center ml-1 pl-4 pr-2 h-full bg-orange-200 hover:bg-orange-300 text-sm font-semibold rounded-lg hover:cursor-pointer select-none">
          Upgrade
          <BoltIcon className="text-orange-400 ml-1"></BoltIcon>
        </div>
        <div className="flex items-center mx-1 pl-4 pr-2 h-full text-sm font-semibold bg-slate-200 hover:bg-slate-300 rounded-lg hover:cursor-pointer select-none">
          Invite
          <PersonAddAlt1Icon fontSize="medium" className="ml-4"></PersonAddAlt1Icon>
        </div>
        <div className="group flex flex-col items-center justify-center relative rounded-xl hover:bg-slate-200 h-9 w-9 mx-2 p-1 hover:cursor-pointer">
          {/* tooltip */}
          <div className="invisible group-hover:visible flex items-center justify-center px-3 absolute h-full top-10 text-sm rounded-xl text-white bg-slate-800">Help</div>
          <HelpOutlineIcon sx={{ fontSize: 28 }}></HelpOutlineIcon>
        </div>
        <div className="group flex flex-col items-center justify-center relative rounded-xl hover:bg-slate-200 h-9 w-9 p-1 hover:cursor-pointer">
          {/* tooltip */}
          <div className="invisible group-hover:visible flex items-center justify-center px-3 absolute h-full top-10 text-sm rounded-xl text-white bg-slate-800">Notifications</div>
          <NotificationsNoneIcon sx={{ fontSize: 28 }}></NotificationsNoneIcon>
        </div>
        <div className="relative rounded-full overflow-hidden mx-2" onClick={() => setAccountSettingsClicked(true)}>
          <img src={currentUser.photoURL} alt={user_avatar} className="h-10 w-10"></img>
          {/* shadow */}
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-0 hover:opacity-20 hover:cursor-pointer"></div>
        </div>
      </div>
      {/* Account Settings */}
      {accountSettingsClicked ?
        <>
          {/* the shady background */}
          <div onContextMenu={(e) => {setAccountSettingsClicked(false); e.preventDefault()}} className="fixed top-0 left-0 z-40 h-screen w-screen bg-black bg-opacity-30" onClick={() => setAccountSettingsClicked(false)}></div>
          <div className="absolute right-8 top-16 w-72 h-52 z-50 flex flex-col select-none bg-white rounded-2xl" onContextMenu={(e) => e.preventDefault()}>
            <div className="flex items-center border-b-2 border-slate-100 p-4">
              <img src={currentUser.photoURL} alt={user_avatar} className="h-10 w-10 rounded-full"></img>
              <div className="ml-4 flex flex-col text-sm font-semibold">
                <h1 className="text-slate-900 truncate w-48">{currentUser.displayName}</h1>
                <h1 className="text-slate-500 truncate w-48">{currentUser.email}</h1>
              </div>
            </div>
            <div>
              <div className="flex items-center rounded-md hover:bg-slate-200 mt-2 mx-2 px-2 py-1 text-slate-900 text-sm font-semibold hover:cursor-pointer">
                <SupportAgentIcon className="mr-4"></SupportAgentIcon>
                <h1>Support</h1>
              </div>
              <div className="flex items-center rounded-md hover:bg-slate-200 mt-2 mx-2 px-2 py-1 text-slate-900 text-sm font-semibold hover:cursor-pointer">
                <PersonIcon className="mr-4"></PersonIcon>
                <h1>Account Settings</h1>
              </div>
              <div className="flex items-center rounded-md hover:bg-slate-200 mt-2 mx-2 px-2 py-1 text-slate-900 text-sm font-semibold hover:cursor-pointer" onClick={signOutClicked}>
                <LogoutIcon className="mr-4"></LogoutIcon>
                <h1>Logout</h1>
              </div>
            </div>
          </div>
        </>
        :
        null
      }
    </div>
  )
}

export default WorkSpaceHeader;