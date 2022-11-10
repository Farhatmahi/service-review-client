import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
        console.log(data)
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5001/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = reviews.filter((review) => review._id !== id);
        setReviews(remaining);
      });
  };

  return (
    <div className="container mx-auto py-6">
      {reviews.length===0 ? <h1 className="text-xl text-center py-6">No reviews were added</h1> : <>
      {reviews.map((review) => (
        <MyReviewsCard
          review={review}
          handleDelete={handleDelete}
          key={review._id}
        />
      ))}
      </>}
    </div>
  );
};

export default MyReviews;
