import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import UserDetailsPage from './pages/UserDetailsPage';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
