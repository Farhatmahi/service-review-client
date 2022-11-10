import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ReviewCard from "../ServiceDetails/ReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/reviews?email=${user?.email}`)
    .then((res) => res.json())
    .then((data) => setReviews(data));
  }, [user?.email])


  return (
    <div className="container mx-auto py-6">
      {reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
    </div>
  );
};

export default MyReviews;
