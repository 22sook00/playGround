import React, { createRef, FC, useCallback, useMemo, useRef } from "react";
import { dummy } from "./data";
import "./position.scss";
import { getTooltipPosition } from "./utilites";

export interface positionDummyProps {

	id: number;
	item: string;
	belongTo: string;
}
interface positionProps {
	children?: React.ReactNode;
	tooltip?: string;
}

const Position: FC<positionProps> = () => {

	////second
	//const [hideElement, setHideElement] = useState<boolean>(false);
	//const scrollRef = useRef<any>(null);

	//useEffect(() => {
	//	if (!scrollRef.current) return;
	//	window.addEventListener("scroll", yScrollEvent);
	//	return () => {
	//		window.removeEventListener("scroll", yScrollEvent);
	//	};
	//}, []);

	//const yScrollEvent = () => {
	//	const scroll = scrollRef.current.getBoundingClientRect();
	//	//console.log(scroll);
	//	setHideElement(scroll.top <= -100);
	//};

	//third
	const tooltipRef = useMemo(
		() => Array.from({ length: dummy.length }).map(() => createRef()),
		[],
	) as any;

	const container = useRef<HTMLDivElement>(null);

	const handleHover = useCallback(
		(list: positionDummyProps, clientX: number) => {
			const idx = list.id - 1;
			const type = list.item;
			if (!container.current) return;

			const tooltip = tooltipRef[idx].current;
			const { left, top } = getTooltipPosition(
				container.current,
				tooltipRef[idx].current,
				type,
				8,
			);
			tooltip.style.opacity = 1;
			tooltip.style.left = `${left}px`;
			tooltip.style.top = `${top}px`;
			//const { left, right, bottom, top } =
			//	container.current.getBoundingClientRect();
			//type === "top"
			//	? (tooltipRef[idx].current.style.top = top + "px")
			//	: type === "right"
			//	? (tooltipRef[idx].current.style.right = right + right + "px")
			//	: type === "left"
			//	? (tooltipRef[idx].current.style.left = left + "px")
			//	: type === "bottom"
			//	? (tooltipRef[idx].current.style.bottom = bottom + "px")
			//	: (tooltipRef[idx].current.style.top = top - top / 6 + "px");

		},
		[tooltipRef],
	);

	const handleMouseOver = (list: positionDummyProps) => {
		const idx = list.id - 1;
		tooltipRef[idx].current.style.opacity = 0;
	};

	return (
		<>
			<section className="position-container">
				<div className="position-scroll-box">
					<section className="position-grid-box" ref={container}>
						{dummy.map((list: positionDummyProps) => {
							return (
								<div
									key={list.id}
									className="position-grid-col"
									onMouseLeave={() => {
										handleMouseOver(list);
									}}
									onMouseEnter={({ clientX }) => handleHover(list, clientX)}
								>
									<>{list.item}</>
									<div className="position-box" ref={tooltipRef[list.id - 1]}>
										{list.item}
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</section>
		</>

		//<div style={{ height: "200vh", background: "#f9f9fb" }} ref={scrollRef}>
		//	{!hideElement && (
		//		<div style={{ position: "fixed", background: "#fff" }}>
		//			<span>스크롤을 일정 수치만큼 내리면 이 영역은 사라집니다!</span>
		//		</div>
		//	)}
		//</div>
	);
};

export default Position;
