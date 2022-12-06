import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '../components/Home';
import { Adoption } from '../components/Adoption';
import { Donations } from '../components/Donations';
import { Events } from '../components/Events';
import { PageNotFound } from '../components/PageNotFound';
import { Nav } from '../components/Nav';

export const MainRoutes = () => (
  <>
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/adoption' element={<Adoption />} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/events' element={<Events />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  </>
);
