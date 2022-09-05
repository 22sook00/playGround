import React from "react";
import "./Pulse.scss";
const Pulse = () => {
	return (
		<section className="pulse-container">
			<div className="pulse-animation-wrapper">
				<div className="pulse-circle-item"></div>
				<div className="pulse-space-wrapper">
					<div className="pulse-each-items"></div>
					<div className="pulse-space-wrapper">
						<div className="pulse-each-items" />
						<div className="pulse-each-items" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pulse;
