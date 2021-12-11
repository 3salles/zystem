import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CampsPage } from '../pages/Camps'
import { Home } from '../pages/Home'
import { RescuedPage } from '../pages/Rescued'

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rescued" element={<RescuedPage />} />
        <Route path="/camps" element={<CampsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
