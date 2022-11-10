import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "./ReviewCard";
import { Watch } from "react-loader-spinner";

const ServiceDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const { _id, service_name, service_description, service_img, price } =
    useLoaderData();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews, _id]);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewText = form.review.value;
    const email = user?.email;

    const review = {
      service: _id,
      service_name: service_name,
      name: user?.displayName || "Unknown User",
      email,
      img: user?.photoURL,
      reviewText,
    };

    fetch("http://localhost:5001/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
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
    <div className="container md:mx-auto">
      <div className="flex justify-between flex-col md:flex-row items-start py-10">
        <div className="md:w-1/2">
          <img src={service_img} className="w-full mb-4 md:mb-0" alt="" />
        </div>
        <div className="md:w-1/2 md:ml-10 px-4">
          <h1 className="text-3xl">{service_name} Photography</h1>
          <hr className="w-1/4 my-3 border-1 border-black" />
          <p>Price : ${price}</p>
          <div className="flex items-center my-4">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="ml-3 text-xs">{reviews.length} Reviews</p>
          </div>
          <p>{service_description}</p>
        </div>
      </div>
      <h1 className="text-3xl text-center my-16">Reviews</h1>
      <div className="grid md:grid-cols-2 gap-6 mx-4">
        <div className="reviews">
          {loading ? (
            <div className="flex justify-center">
              <Watch
                height="80"
                width="80"
                radius="48"
                color="#000000"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          ) : (
            reviews?.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))
          )}
        </div>
        <div className="">
          {user?.email ? (
            <>
              <h1 className="text-lg md:text-xl mb-6">Write a review</h1>
              <form onSubmit={handleReview}>
                <textarea
                  className="textarea textarea-bordered w-full"
                  name="review"
                  placeholder="Something good"
                ></textarea>

                <br />
                <button className="btn btn-primary">Send</button>
              </form>
            </>
          ) : (
            <h1>Please login to write a review</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
