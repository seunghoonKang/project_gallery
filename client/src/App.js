import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './user/login';
import Register from './user/register';
import DeleteUser from './user/deleteUser';
import ReviseUser from './user/ReviseUser';

import Home from "./Home/home";
function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
