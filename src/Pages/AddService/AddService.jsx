import React from "react";
import PageBannerAddService from "../../Shared/PageBanner/PageBannerAddService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const notify = () => toast("Service added successfully!");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const service_name = form.serviceName.value;
    const service_description = form.description.value;
    const service_img = form.imgLink.value;
    const price = form.price.value;

    const service = {
      service_name,
      service_description,
      service_img,
      price,
    };

    fetch("http://localhost:5001/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      });
  };

  return (
    <div className="">
      <PageBannerAddService />
      <div className="hero py-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:ml-16">
            <h1 className="text-5xl font-bold">Hurray!</h1>
            <p className="py-6">Now you can add a custom service here</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  name="serviceName"
                  placeholder="Service name here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Image Link</span>
                </label>
                <input
                  type="text"
                  name="imgLink"
                  placeholder="Image link here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button onClick={notify} className="btn btn-primary">
                  Submit
                </button>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
