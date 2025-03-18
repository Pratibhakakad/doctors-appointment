import React,{ ReactNode } from 'react'
import Navbar from '../components/Frontend/Navbar'
import MegaMenu from '../components/Frontend/MegaMenu';


export default function Layout({ children } : { children : ReactNode}) {
  return (
    <div className='bg-white'>
      
        <Navbar/>
        <div className='bg-white mx-auto py-4  
        fixed top-21 w-full left-0 right-0 z-50
         border-t border-gray-400/30 '>
     <MegaMenu/>
        
     </div>
        { children}
    </div>
  )
}
