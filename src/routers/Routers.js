import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Home from "./../pages/Home";
import About from "./../pages/About";
import SellMyCar from "../pages/SellMyCar";
import UsedCars from "../pages/UsedCars";
import CarEvaluation from "../Componants/UI/CarEvaluation";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home" />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/cars" element={<CarListing />} />
			<Route path="/cars/:slug" element={<CarDetails />} />
			<Route path="/blogs" element={<Blog />} />
			<Route path="/blogs/:slug" element={<BlogDetails />} />
			<Route path="/sellMyCar" element={<SellMyCar />} />
			<Route path="/usedCars" element={<UsedCars />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/carEvaluation" element={<CarEvaluation />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};
export default Routers;
