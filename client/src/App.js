import './App.css';
import { Routes , Route} from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/auth/login";
import Sidebar from './components/admin/Sidebar';
import Cookies from "js-cookie";
import Navbar from "./components/admin/Navbar";
import Userprofile from './components/user/Userprofile';


function App() {
  const role = Cookies.get("Role")
  if (!role || role === ""){
    return (
      <Routes>
      <Route path='/' element = {<Login/>} />
      </Routes>
    );
  } else if (role === "admin"){
    return(
      <div>
        <Sidebar>
          <Navbar />
          <Routes>
            <Route path='/dashboard' element = {<Dashboard />} />
          </Routes>
        </Sidebar>
      </div>
    )
  } else if (role === "user")
  return (
    <div>
      <Routes>
        <Navbar />
        <Route path='/user-profile' element = {<Userprofile />} />
      </Routes>
    </div>
  );
}

export default App;
