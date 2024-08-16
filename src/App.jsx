// src/App.jsx
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css'



const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  return (
    <>
      <NavBar />  {/* Add NavBar here */}
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        {/* Other routes will be added here */}
      </Routes>
    </>
  );
};

export default App;
