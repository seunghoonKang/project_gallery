import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home/home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}
export default App;
