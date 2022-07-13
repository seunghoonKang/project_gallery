import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import Footer from './footer/Footer';
import { ProjectDetail } from './project/projectDetail';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';
import HomeNav from './Home/homenav';
import Proposal from './Proposal/proposal';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #27262b;
`;
function App() {
  return (
    <BrowserRouter>
      <Body>
        <div className="App">
          <HomeNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Proposal" element={<Proposal />} />
            <Route path="/register" element={<Register />} />
            <Route path="projectDetail" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Body>
    </BrowserRouter>
  );
}
export default App;
