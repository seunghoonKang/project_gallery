import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useParams } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';
//import Footer from './footer/Footer';
import { ExhibitionDetail } from './exhibition/exhibitionDetailt';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';
import HomeNav from './home/homenav';
import ProposalList from './proposal/proposalList';
import ExhibitionList from './exhibition/exhibitionListPages';
import exhibitionProject from './data/data';
import { exhibitionProjects } from './api/exhibition/exhibitionProject';
import { PropsalDetail } from './proposal/proposalDetail';
function App() {
  // useEffect(() => {
  //   exhibitionProjects().then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/proposalList" element={<ProposalList />} />
          <Route
            path="/proposalDetail/:id"
            element={<PropsalDetail exhibitionProject={exhibitionProject} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/exhibitionList" element={<ExhibitionList />} />
          <Route
            path="/exhibitionDetail/:id"
            element={<ExhibitionDetail exhibitionProject={exhibitionProject} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
