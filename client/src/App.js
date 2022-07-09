import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import UserRoutes from './user/userRoutes';
import './App.css';
// import HomeNav from './Home/homenav';
import Proposal from './Proposal/proposal';
import {lazy} from "react";

const HomeNav = lazy(() => import('./Home/homenav'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/*" element={<UserRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
