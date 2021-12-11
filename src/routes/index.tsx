import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { RescuedPage } from '../pages/Rescued'

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rescued" element={<RescuedPage />} />
      </Routes>
    </BrowserRouter>
  )
}
