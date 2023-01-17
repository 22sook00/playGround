import Button from "components/Common/Button/Button";
import React, { useState, useEffect } from "react";
import ScrollComp1 from "./ScrollComp1";
import ScrollComp2 from "./ScrollComp2";
import ScrollComp3 from "./ScrollComp3";
import ScrollTab from "./ScrollTab";
import "./scrollTo.scss";
import { useThemeObserver } from "./useThemeObserver";
export interface ScrollCompProps {
	isRef: any;
}
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

	const [navNumber, setNavNumber] = useState(1);

	const [comp1] = useThemeObserver(setNavNumber, 1);
	const [comp2] = useThemeObserver(setNavNumber, 2);
	const [comp3] = useThemeObserver(setNavNumber, 3);

	console.log("navNumber?", navNumber);
	const handleMoveTo = () => {};

	return (
		<section className="scroll-container">
			<ScrollTab position={navNumber} handleMoveTo={handleMoveTo} />
			<div className="scroll-wrapper">
				<ScrollComp1 isRef={comp1} />
				<ScrollComp2 isRef={comp2} />
				<ScrollComp3 isRef={comp3} />
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
