import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import PageBannerServices from '../../Shared/PageBanner/PageBanner';

import ServiceCard from '../Home/Services/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/all-services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
    return (
        <div>
            <PageBannerServices/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 mx-4 lg:container lg:mx-auto">
      <PhotoProvider>
        {services.map((service) => (
          <><PhotoView key={service?.id} service={service} />
          <ServiceCard key={service?.id} service={service} /></>
        ))}
       </PhotoProvider>
      </div>
        </div>
    );
};

export default Services;