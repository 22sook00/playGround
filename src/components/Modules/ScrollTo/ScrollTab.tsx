import React, { FC, useEffect, useState } from "react";
import { dummyData, DummyDataProps } from "./dummyData";
interface ScrollTabProps {
	position: number;
	handleMoveTo: any;
}

const ScrollTab: FC<ScrollTabProps> = ({ position, handleMoveTo }) => {
	const sliceDummy = dummyData.slice(0, 3);

	return (
		<section className="tab-container">
			{sliceDummy.map((el: any, idx: number) => {
				return (
					<div
						key={idx}
						style={
							position === el.id
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
	);
};

export default ScrollTab;
