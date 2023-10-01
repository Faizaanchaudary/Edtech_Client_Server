import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Signup from './CreateUser.jsx';
import Login from './LoginUser.jsx';
import BlogUploadPanel from './Components/BlogPanel.jsx';

function App() {
  return (
    <>
  
<BrowserRouter>
<Routes>
<Route path="/login" element= {<Login />}> </Route>
<Route  path="/signup" element= {<Signup />}> </Route>
<Route  path="/dashboard" element= {<BlogUploadPanel />}> </Route>
</Routes>
</BrowserRouter>
    </>
  );
};

export default App;
