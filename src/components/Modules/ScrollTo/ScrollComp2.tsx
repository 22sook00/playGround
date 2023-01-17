import React, { FC } from "react";
import { ScrollCompProps } from "./ScrollTo";

const ScrollComp2: FC<ScrollCompProps> = ({ isRef }) => {
	return (
		<section className="comp comp2-container" ref={isRef}>
			ScrollComp2
		</section>
	);
};

export default ScrollComp2;
