import 'bootstrap/dist/css/bootstrap.min.css';
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
import { PropsalDetail } from './proposal/proposalDetail';
import RecruitmentList from './recruitment/recruitmentList';
import { RecrutmentDetail } from './recruitment/recruitmentDetail';
import Write from './write/write';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
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

          <Route path="/recruitmentList" element={<RecruitmentList />} />
          <Route path="/recruitmentDetail/:id" element={<RecrutmentDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
