import React from 'react';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import Navigations from '../components/Navigation';
import Footer from '../components/Footer'
 
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigations />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}