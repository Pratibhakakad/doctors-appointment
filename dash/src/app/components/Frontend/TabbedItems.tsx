"use client"; 

import { Tabs } from "flowbite-react";
import { Activity, Microscope, Stethoscope, Syringe, X } from "lucide-react";
import ServiceList from "./Services/ServiceList";
import LinkCard from "./Doctors/LinkCard";
// import { HiUserCircle } from "react-icons/hi";

export default function TabbedItems() {
  const services = [,
    {
      title:"Telehealth",
      image:"/doctor.jpg",
      slug:"telehealth",
    },
    {
      title:"Video Prescription",
      image:"/doctor.jpg",
      slug:"telehealth",
    },
    {
      title:"UTI consult",
      image:"/doctor.jpg",
      slug:"telehealth",
    },
    {
      title:"Mental Health",
      image:"/doctor.jpg",
      slug:"telehealth",
    },
    {
      title:"ED Consult",
      image:"/doctor.jpg",
      slug:"telehealth",
    },
    {
      title:"Urgent Care",
      image:"/doctor.jpg",
      slug:"telehealth",
    }
  ];
  const tabs = [
    { title: "Popular Services", icon: Stethoscope, component:<ServiceList data={services}/>, content: [] },
    { title: "Doctors", icon: Microscope, component:<LinkCard/>, content: [] },
    { title: "Specialist", icon: Activity,  component:<LinkCard className='bg-blue-900'/>, content: [] },
    { title: "Symptoms", icon: Syringe,  component:<LinkCard className='bg-pink-950' />, content: [] },

  ];

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
           {tab.component}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
