import React, { use } from "react";
import RegisterLottie from "../../assets/Lotties/waiting register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const {SignInUser}=use(AuthContext)
  
  // ! function for login

    const handleLogin =(e)=>{
        e.preventDefault()
        const email= e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
        
      // ! for signin
      SignInUser(email,password)
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
       
    }
    
    return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              animationData={RegisterLottie}
              style={{ width: "300px" }}
              loop={true}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-success mt-4">login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
