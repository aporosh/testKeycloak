import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageAuth from '../pages/PageAuth';
import PageRoomList from '../pages/PageRoomList';
import PageStart from "../pages/PageStart";

const AppRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<PageStart />} />
          <Route path="/auth" element={<PageAuth />} />
          <Route path="/rooms" element={<PageRoomList />} />
        </Routes>
    );
};

export default AppRouter;