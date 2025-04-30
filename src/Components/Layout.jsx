
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> 
       
      </main>
      <Footer />
    </div>
  )
};

export default Layout
