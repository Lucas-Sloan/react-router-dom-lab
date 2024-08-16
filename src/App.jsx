// src/App.jsx
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import './App.css'



const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        {/* Other routes will be added here */}
      </Routes>
    </>
  );
};

export default App;
