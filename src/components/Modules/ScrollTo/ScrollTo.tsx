import Button from "components/Common/Button/Button";
import React, { useState, useEffect, useCallback } from "react";
import { dummyData } from "./dummyData";
import ScrollComp1 from "./ScrollComp1";
import ScrollComp2 from "./ScrollComp2";
import ScrollComp3 from "./ScrollComp3";
import ScrollTab from "./ScrollTab";
import "./scrollTo.scss";
import useMoveToScroll from "./useMoveToScroll";
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
	const sliceDummy = dummyData.slice(0, 3);
	const [navNumber, setNavNumber] = useState(1);

	const [comp1] = useThemeObserver(setNavNumber, 1);
	const [comp2] = useThemeObserver(setNavNumber, 2);
	const [comp3] = useThemeObserver(setNavNumber, 3);

	const handleMoveTo = useCallback(
		(idx: number) => {
			const compRef = idx === 1 ? comp1 : idx === 2 ? comp2 : (comp3 as any);

			const headerOffset = 145;
			//const element = document.getElementById("targetElement") as any;
			const element = compRef.current;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - headerOffset;
			//console.log("compRef", compRef, offsetPosition);
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		},
		[comp1, comp2, comp3],
	);

	return (
		<section className="scroll-container" id="targetElement">
			{/*<ScrollTab position={navNumber} handleMoveTo={handleMoveTo} />*/}
			<section className="tab-container">
				{sliceDummy.map((el: any, idx: number) => {
					return (
						<div
							key={idx}
							style={
								navNumber === el.id
									? { color: "darkBlue" }
									: { color: "rgb(100, 102, 118)" }
							}
							onClick={() => handleMoveTo(el.id)}
						>
							{el.title}
						</div>
					);
				})}
			</section>
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
