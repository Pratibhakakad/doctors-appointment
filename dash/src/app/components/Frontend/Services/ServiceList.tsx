import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceProps } from '../../../../../types/types';


export default function ServiceList({data}:{data: ServiceProps[]}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-6'>
       {
        data.map((service,i)=>{
          return<ServiceCard key={i} service={service} />
        })
       }
    </div>
  )
}
