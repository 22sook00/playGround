import React, { FC } from "react";
import { ScrollCompProps } from "./ScrollTo";

const ScrollComp3: FC<ScrollCompProps> = ({ isRef }) => {
	return (
		<section className="comp comp3-container" ref={isRef}>
			ScrollComp3
		</section>
	);
};

export default ScrollComp3;
