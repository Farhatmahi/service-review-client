import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import PageBannerLogin from "../../Shared/PageBanner/PageBannerLogin";

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.form?.pathname || '/'
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      const currentUser = {
        email: user.email,
      };

      fetch("http://localhost:5001/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
        });
        navigate(from, {replace : true})
    });
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  return (
    <div className="">
      <PageBannerLogin />
      <div className="hero py-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:ml-16">
            <h1 className="text-3xl lg:text-5xl font-bold">Login now!</h1>
            <p className="text-sm lg:text-md py-6">
              Login here to get access to your reviews and custom services
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body pb-0">
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
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="divider">OR</div>
            </form>
            <div className="form-control p-8">
              <button onClick={handleGoogle} className="btn btn-primary">
                Continue with <FcGoogle className="ml-4" />
              </button>
            </div>
            <label className="label">
              <p className=" px-8 pb-4 text-xs">
                New here? Please
                <Link
                  to="/register"
                  className="label-text-alt link link-hover ml-2"
                >
                  Register
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
