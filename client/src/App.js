import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import Footer from './footer/Footer';
import { DisplayProject } from './display/displayProject';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';
import HomeNav from './Home/homenav';
import Proposal from './Proposal/proposal';
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Proposal" element={<Proposal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/displayProject" element={<DisplayProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
