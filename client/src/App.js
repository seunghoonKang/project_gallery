import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useMemo } from 'react';
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
import { exhibition } from './api/exhibition/exhibitionProject';
import { PropsalDetail } from './proposal/proposalDetail';

import WritePage from './write/WritePage';

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
          <Route path="/proposalDetail/:id" element={<PropsalDetail />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/exhibitionList"
            element={<ExhibitionList exhibitionProject={exhibitionProject} />}
          />
          <Route
            path="/exhibitionDetail/:id"
            element={<ExhibitionDetail exhibitionProject={exhibitionProject} />}
          />
          <Route path="proposalList/write" element={<WritePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
