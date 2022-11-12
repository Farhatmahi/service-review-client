import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import PageBannerRegister from "../../Shared/PageBanner/PageBannerRegister";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  useTitle("Register");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      const currentUser = {
        email: user.email,
      };

      fetch("https://sarah-mcconor.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.token);
          localStorage.setItem("token", data.token);
        });
    });
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);
      const currentUser = {
        email: user.email,
      };

      fetch("https://sarah-mcconor.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.token);
          localStorage.setItem("token", data.token);
        });
    });
  };

  return (
    <div className="">
      <PageBannerRegister />
      <div className="hero py-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:ml-16">
            <h1 className="text-3xl lg:text-5xl font-bold">New here?</h1>
            <p className="text-sm lg:textmd py-6">
              Register to get access to your reviews and custom services
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="divider">OR</div>
            </form>
            <div className="form-control p-8">
              <button className="btn btn-primary" onClick={handleGoogle}>
                Register with <FcGoogle className="ml-4" />
              </button>
            </div>
            <label className="label">
              <p className=" px-8 pb-4 text-xs">
                Already have an account?
                <Link
                  to="/login"
                  className="label-text-alt link link-hover ml-2"
                >
                  Login
                </Link>
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
