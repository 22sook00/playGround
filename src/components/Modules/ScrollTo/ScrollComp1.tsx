import React, { FC } from "react";
import { ScrollCompProps } from "./ScrollTo";
const ScrollComp1: FC<ScrollCompProps> = ({ isRef }) => {
	return (
		<section className="comp comp1-container" ref={isRef}>
			ScrollComp1
		</section>
	);
};

export default ScrollComp1;
