import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Siderbar/Siderbar';
import Main from './component/main/Main';
import Login from './component/Login/Login';
import ContextProvider from './context/context'; // Default import

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Sidebar /><Main /></>} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
