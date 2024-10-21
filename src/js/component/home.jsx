import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { WelcomeCard } from "./welcomecard";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const cards = [1,2,3,4];
	return (
		<div>
			<div className="container-fluid bg-dark">

			<div className="container">
		<Navbar/>

			</div>
			</div>
		<div className="container">

			<WelcomeCard/>

			<div className="d-flex justify-content-between container my-5">
			{cards.map(el => <Card/>)}

		</div>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
