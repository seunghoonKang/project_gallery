import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home';
//import Footer from './footer/Footer';
import { ExhibitionDetail } from './exhibition/exhibitionDetailt';

import { Login, Register, DeleteUser, ReviseUser } from './user';

//const Login=lazy(()=>import('./user/login'))
//const User = lazy(() => import('./user'));
import './App.css';
import HomeNav from './home/homenav';
import Proposal from './proposal/proposal';
import ExhibitionList from './exhibition/exhibitionListPages';
import exhibitionProject from './data/data';
import PropsalProject from './proposal/propsalProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/proposal/:id" element={<ExhibitionDetail />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/exhibitionDetail/:id"
            element={
              <ExhibitionDetail
                exhibitionProject={exhibitionProject}
                useParams={useParams}
              />
            }
          />
          <Route path="/Exhibition" element={<ExhibitionList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
