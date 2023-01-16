import Button from "components/Common/Button/Button";
import React, { useState, useEffect, useRef } from "react";
import { dummyData } from "./dummyData";
import "./scrollTo.scss";

const ScrollTo = () => {
	const [btnStatus, setBtnStatus] = useState<boolean>(false);

	const handleScroll = () => {
		if (window.scrollY > 400) {
			setBtnStatus(true);
		} else {
			setBtnStatus(false);
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
			window.addEventListener("scroll", handleScroll);
		}, 100);
		return () => {
			clearInterval(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className="scroll-container">
			<div className="scroll-wrapper">
				{dummyData.map((el) => {
					return <div key={el.id}>{el.id}</div>;
				})}
			</div>
			{btnStatus && (
				<div className="button-wrapper">
					<Button>버튼</Button>
				</div>
			)}
		</section>
	);
};

export default ScrollTo;
