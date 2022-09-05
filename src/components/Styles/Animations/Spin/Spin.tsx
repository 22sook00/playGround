import React from "react";
import "./Spin.scss";

const Spin = () => {
	return (
		<button className="spin-button-wrapper">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				className="spin-item"
				viewBox="0 0 24 24"
			>
				<circle
					cx={"12"}
					cy={"12"}
					r={"10"}
					stroke={"#ffffff"}
					strokeWidth={4}
				/>
				<path
					fill="#ffffff"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
			{/*<div className="spin-item">
				<p className="spin-circle"></p>
				<p className="spin-half-circle"></p>
			</div>*/}
			<p> Processing...</p>
		</button>
	);
};

export default Spin;
