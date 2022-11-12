import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import PageBannerReviews from "../../Shared/PageBanner/PageBannerReviews";
import MyReviewsCard from "./MyReviewsCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const notify = () => toast("Review Deleted!");

  useEffect(() => {
    fetch(`https://sarah-mcconor.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://sarah-mcconor.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = reviews.filter((review) => review._id !== id);
        setReviews(remaining);
      });
    notify();
  };

  // const handleUpdate = (id) => {
  //   fetch(`https://sarah-mcconor.vercel.app/reviews/${id}`,
  //   {
  //     method : "PATCH",
  //     headers : {
  //       'content-type' : 'application/json'
  //     },
  //     body : JSON.stringify('')
  //   })
  // }

  return (
    <div className="">
      <PageBannerReviews />
      <div className="container lg:mx-auto py-6">
        {reviews.length === 0 ? (
          <h1 className="text-xl text-center py-6">No reviews were added</h1>
        ) : (
          <>
            {reviews?.map((review) => (
              <MyReviewsCard
                review={review}
                handleDelete={handleDelete}
                key={review._id}
              />
            ))}
          </>
        )}
      </div>
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
  );
};

export default MyReviews;
