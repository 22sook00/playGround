import React, { useEffect, useState } from "react";
import "./Pulse.scss";

const Pulse = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 10000);
	}, []);
	return (
		<>
			<h1>shimmer</h1>
			<div>
				{!isLoading ? (
					<li className="skeleton-item">
						<div>
							<div className="skeleton-img" />
						</div>
						<div className="skeleton-info">
							{new Array(4).fill(1).map((_, i) => {
								return <div key={i}>내용{i}</div>;
							})}
						</div>
					</li>
				) : (
					<li className="skeleton-item">
						<div>
							<div className="skeleton-img" />
						</div>
						<div className="skeleton-info">
							<p className="skeleton-name" />
							<p className="skeleton-email" />
							<p className="skeleton-email" />
							<p className="skeleton-desc" />
						</div>
					</li>
				)}
			</div>
			<h1>pulse</h1>
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
		</>
	);
};

export default Pulse;
