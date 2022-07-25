import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import { ExhibitionDetailPage } from './components/exhibition/exhibitionDetailtPages';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';
import HomeNav from './components/home/homenav';
import ProposalList from './proposal/proposalList';
import ExhibitionListPage from './pages/exhibition/exhibitionListPages';
import { PropsalDetail } from './proposal/proposalDetail';
import RecruitmentList from './recruitment/recruitmentList';
import { RecrutmentDetail } from './recruitment/recruitmentDetail';
import Write from './pages/write/write';
import WriteMiddle from './components/write/writeMiddle';

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
          <Route path="/proposalList" element={<ProposalList />} />
          <Route path="/proposalDetail/:id" element={<PropsalDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exhibitionList" element={<ExhibitionListPage />} />
          <Route
            path="/exhibitionDetail/:id"
            element={<ExhibitionDetailPage />}
          />

          <Route path="/recruitmentList" element={<RecruitmentList />} />
          <Route path="/recruitmentDetail/:id" element={<RecrutmentDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
