import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import PageBannerServices from "../../Shared/PageBanner/PageBanner";
import { Watch } from "react-loader-spinner";

import ServiceCard from "../Home/Services/ServiceCard";

const Services = () => {
  const { loading } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useTitle("Services");
  useEffect(() => {
    fetch("http://localhost:5001/all-services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div>
      <PageBannerServices />
      {loading ? (
        <div className="flex justify-center mt-8">
          <Watch
            height="40"
            width="40"
            radius="48"
            color="#000000"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 mx-4 lg:container lg:mx-auto">
          <PhotoProvider>
            {services.map((service) => (
              <>
                <PhotoView key={service?.id} service={service} />
                <ServiceCard key={service?.id} service={service} />
              </>
            ))}
          </PhotoProvider>
        </div>
      )}
    </div>
  );
};

export default Services;
