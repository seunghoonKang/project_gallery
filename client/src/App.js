import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/home';
import { ExhibitionDetailPage } from './pages/exhibition/exhibitionDetailtPages';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';

import HomeNav from './components/home/homenav';
import Write from './pages/write/write';
import WriteMiddle from './components/write/writeMiddle';
import ProposalListPage from './pages/proposal/proposalListPage';
import ExhibitionListPage from './pages/exhibition/exhibitionListPages';
import { PropsalDetailPage } from './pages/proposal/proposalDetailPage';
import RecruitmentListPage from './pages/recruitment/recruitmentListPage';
import { RecrutmentDetailPage } from './pages/recruitment/recruitmentDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/writeMiddle" element={<WriteMiddle />} />
          <Route path="/proposalList" element={<ProposalListPage />} />
          <Route path="/proposalDetail/:id" element={<PropsalDetailPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exhibitionList" element={<ExhibitionListPage />} />
          <Route
            path="/exhibitionDetail/:id"
            element={<ExhibitionDetailPage />}
          />

          <Route path="/recruitmentList" element={<RecruitmentListPage />} />
          <Route
            path="/recruitmentDetail/:id"
            element={<RecrutmentDetailPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
