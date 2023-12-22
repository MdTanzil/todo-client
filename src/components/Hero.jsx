import Lottie from "lottie-react";
import todoimg from "../assets/todo.json" 
import {useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
      <Lottie animationData={todoimg} className="max-w-lg" />
        <div className="">
          <h1 className="text-4xl font-bold">Manage Your Task</h1>
          <p className="py-6">
          Simplify your day with our easy-to-use todo app. <br /> Organize tasks, set priorities, and stay on top of your to-dos effortlessly. <br /> Boost productivity and achieve your goals with a straightforward and user-friendly interface.
          </p>
          
          <button className="btn btn-accent" onClick={()=> navigate('/dashboard')}>Let's Explore</button>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
