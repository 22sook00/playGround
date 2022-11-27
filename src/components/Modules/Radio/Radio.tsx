import React from "react";
import "./radio.scss";
const dummyData = [
	{ id: 1, title: "email", type: "contact" },
	{ id: 2, title: "phone", type: "contact" },
	{ id: 3, title: "mail", type: "contact" },
];

const Radio = () => {
	return (
		<section className="radio-section">
			{dummyData.map((radio) => {
				return (
					<div className="radio-container" key={radio.id}>
						<input
							className="accent"
							id={`radio-${radio.id}`}
							key={radio.id}
							type="radio"
							name={radio.type}
							value={radio.title}
							checked
						/>
						<label htmlFor={`radio-${radio.id}`}>{radio.title}</label>
					</div>
				);
			})}
		</section>
	);
};

export default Radio;
