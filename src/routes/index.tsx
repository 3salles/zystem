import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DrawerForm } from '../components/DrawerForm'
import { useForm } from '../hooks/useForm'
import { ActivitiesPage } from '../pages/Activities'
import { CampsPage } from '../pages/Camps'
import { Home } from '../pages/Home'
import { RescuedPage } from '../pages/Rescued'

export const CustomRoutes = () => {
  const { isDrawerOpen, onCloseDrawer, title, typeForm } = useForm()
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rescued" element={<RescuedPage />} />
          <Route path="/camps" element={<CampsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
      </BrowserRouter>
      <DrawerForm
        isOpen={isDrawerOpen}
        onClose={onCloseDrawer}
        title={title}
        typeForm={typeForm}
      />
    </>
  )
}
