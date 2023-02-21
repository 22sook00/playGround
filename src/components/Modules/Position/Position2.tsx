import Tooltip from "components/Common/Tooltip/Tooltip";
import React, { createRef, useEffect, useMemo, useRef } from "react";
import "./position.scss";

import { secondDummy } from "./data";
import { positionDummyProps } from "./Position";
import { getTooltipPosition } from "./utilites";

const Position2 = () => {
	const childRef = useRef<any>();
	const tooltipRef = useMemo(
		() => Array.from({ length: secondDummy.length }).map(() => createRef()),
		[],
	) as any;
	console.log("el:", childRef.current);
	useEffect(() => {
		const el = childRef.current;
		console.log("el:", el);
		if (!el) return;
		const handleMouseEnter = (e: any) => {
			//setIsVisible(true);
			const tooltip = tooltipRef.current;

			console.log("tooltipRef:", tooltipRef);
			if (!tooltip) return;
			const { left, top } = getTooltipPosition(el, tooltip, "top", 8);

			console.log("lelel", left, top);
			tooltip.style.left = `${left}px`;
			tooltip.style.top = `${top}px`;
		};

		const handleMouseLeave = () => {
			//setIsVisible(false);
		};
		el.addEventListener("mouseenter", (e: any) => handleMouseEnter(e));
		el.addEventListener("mouseleave", handleMouseLeave);
		return () => {
			el.removeEventListener("mouseenter", handleMouseEnter);
			el.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [tooltipRef, childRef]);
	return (
		<div className="container">
			{secondDummy.map((list: positionDummyProps) => {
				return (
					<div key={list.id} ref={childRef}>
						<p className="example-block">{list.item}</p>
						<div ref={tooltipRef[list.id - 1]} className="tooltip">
							{list.item}
						</div>
						{/*<Tooltip
							gap={8}
							position={list.belongTo}
							tooltipContent={list.item}
							id={list.id}
							childRef={childRef}
							tooltipRef={tooltipRef}
						>
						</Tooltip>*/}
					</div>
				);
			})}
		</div>
	);
};

export default Position2;
