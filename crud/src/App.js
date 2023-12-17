import logo from "./logo.svg";
import './App.css';

import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        < Route path="/" element={<CodeforInterview />} />
        < Route path="/All" element={<AllUsers />} />
        < Route path="/Add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
