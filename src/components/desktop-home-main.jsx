import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/desktop-home-main.css";

const HomeMain = () => {
    
	const navigate = useNavigate();

	return (
		<div className="desktop-home-main">
			<div className="homie">
				<div className="home-a">
					<h3 className="home-a-h3">So, you want to travel to</h3>
					<h2 className="home-a-h2">Space</h2>
					<p className="home-a-p">
						Let’s face it; if you want to go to space, you might as well <br />{" "}
						genuinely go to outer space and not hover kind of on the <br /> edge
						of it. Well sit back, and relax because we’ll give you <br /> a
						truly out of this world experience!
					</p>
				</div>
				<div
				
				>
				<button onClick={() => navigate("/destination")} className="home-b" >
				<span className="anim"></span>
				<span className="home-b-hover"></span>
					<Link to="/destination">
						Explore
					</Link>
				</button>
				</div>
			</div>
			
		</div>
	);
};

export default HomeMain;
