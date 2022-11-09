import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { login, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);
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
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ml-16">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
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
  );
};

export default Login;
