import React from 'react';
import Hero from '../components/Frontend/Hero';
import Brand1 from '../components/Frontend/Brands';
import TabbedSection from '../components/Frontend/TabbedSection'
import DoctorsList from '../components/ui/DoctorsList';

export default function Home() {
  return (
    <section >
      
      <Hero/> 
     <Brand1/>
     <TabbedSection/>
     <DoctorsList/>
     <DoctorsList className="bg-white py-8 lg:py-24"
     title="In-person doctor visit" isInPerson={true} />
    </section>
   
  );
}