import logo from './logo.svg';
import './App.css';
import Home from './component/home/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './component/login/Signup';
import Adminlogin from './component/login/Adminlogin';
import Mainhome from './component/mainhome/Mainhome';
import About from './component/about/About';
import Articlelist from './component/articlelist/Articlelist';
import Articles from './component/articles/Articles';
import Error from './component/error/Error';
import Adminhome from './component/admin/Adminhome';
import Addblog from './component/admin/Addblog';
import Blog from './component/admin/Blog';
import Editform from './component/admin/editform';

function App() {
  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Home/>}></Route>
        <Route path="/adminlogin" element={<Adminlogin/>}></Route>
        {/* <Route path="/mainhome" element={<Mainhome/>}></Route> */}
        <Route path="/about" element={<About/>}></Route>
        <Route path="/articlelist" element={<Articlelist/>}></Route>
        <Route path="/article/:_id" element={<Articles/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/adminhome" element={<Adminhome/>}></Route>
        <Route path="/addblog" element={<Addblog/>}></Route>
        <Route path="/admin/article/:_id" element={<Blog/>}></Route>
        <Route path="/:_id/editform" element={<Editform/>}></Route>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
