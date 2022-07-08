import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home/home";
import Login from './user/login';
import './App.css';
import HomeNav from './Home/homenav';
import Proposal from './Proposal/proposal';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <HomeNav />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/Proposal" element = {<Proposal />} />           
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
