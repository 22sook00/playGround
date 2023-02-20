import React, {
	createRef,
	FC,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import "./position.scss";
import { getMousePosition } from "./utilites";

interface positionDummyProps {
	id: number;
	item: string;
	belongTo: string;
}
interface positionProps {
	children?: React.ReactNode;
	tooltip?: string;
}
const dummy: positionDummyProps[] = [
	{ id: 1, item: "leftTop", belongTo: "top" },
	{ id: 2, item: "top", belongTo: "top" },
	{ id: 3, item: "rightTop", belongTo: "top" },
	{ id: 4, item: "left", belongTo: "left" },
	{ id: 5, item: "center", belongTo: "center" },
	{ id: 6, item: "right", belongTo: "right" },
	{ id: 7, item: "leftBottom", belongTo: "bottom" },
	{ id: 8, item: "bottom", belongTo: "bottom" },
	{ id: 9, item: "rightBottom", belongTo: "bottom" },
];

const Position: FC<positionProps> = ({
	children,
	tooltip = "I am tooltip",
}) => {
	const [isPositionBox, setIsPositionBox] = useState<boolean>(false);
	const [positionContent, setPositionContent] = useState<
		positionDummyProps | any
	>({});
	const [curPosition, setCurPostion] = useState<any>(null);
	//getBoundingClientRect()
	const handleClick = useCallback((list: positionDummyProps) => {
		setIsPositionBox(true);
		setPositionContent(list);
		getRectFunc(list.item, list.id);
	}, []);

	const getRectFunc = (position: string, idx: number) => {
		const rect = document.querySelector(".position-grid-col");
		setCurPostion(rect?.getBoundingClientRect());
		return rect;
	};

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
			const type = list.belongTo;
			if (!container.current) return;
			const { left, right, bottom, top } =
				container.current.getBoundingClientRect();
			//console.log("v:", clientX, left, right, bottom, top);

			tooltipRef[idx].current.style.opacity = 1;
			type === "top"
				? (tooltipRef[idx].current.style.top = top - 40 - top / 2 + "px")
				: type === "right"
				? (tooltipRef[idx].current.style.right = right - right + 100 + "px")
				: type === "left"
				? (tooltipRef[idx].current.style.left = left - 10 - left / 2 + "px")
				: type === "bottom"
				? (tooltipRef[idx].current.style.bottom = bottom - bottom + 110 + "px")
				: (tooltipRef[idx].current.style.top = top - top / 6 + "px");
		},
		[tooltipRef],
	);

	const handleMouseOver = (list: positionDummyProps) => {
		const idx = list.id - 1;
		tooltipRef[idx].current.style.opacity = 0;
	};

	return (
		<div className="position-container">
			<div className="position-scroll-box">
				<section className="position-grid-box">
					{dummy.map((list: positionDummyProps) => {
						return (
							<div
								key={list.id}
								ref={container}
								className="position-grid-col"
								onMouseLeave={() => {
									handleMouseOver(list);
								}}
								onMouseEnter={({ clientX }) => handleHover(list, clientX)}
								//onClick={() => handleClick(list)}
							>
								<>{list.item}</>
								<div
									className="position-box"
									ref={tooltipRef[list.id - 1]}
									//style={{ left: "30px" }}
								>
									{list.item}
								</div>
							</div>
						);
					})}
				</section>
			</div>
		</div>

		//<div style={{ height: "200vh", background: "#f9f9fb" }} ref={scrollRef}>
		//	{!hideElement && (
		//		<div style={{ position: "fixed", background: "#fff" }}>
		//			<span>스크롤을 일정 수치만큼 내리면 이 영역은 사라집니다!</span>
		//		</div>
		//	)}
		//</div>
		//<div className="tailwindContinaer">
		//	<div
		//		ref={container}
		//		onMouseEnter={({ clientX }) => {
		//			if (!tooltipRef.current || !container.current) return;
		//			const { left, right, bottom, top } =
		//				container.current.getBoundingClientRect();
		//			//tooltipRef.current.style.left = clientX - 0 + "px";
		//			//tooltipRef.current.style.right = clientX - 0 + "px";
		//			//tooltipRef.current.style.bottom = clientX - 0 + "px";
		//			tooltipRef.current.style.top = clientX - 200 + "px";
		//			console.log("top:", tooltipRef.current.style.top);
		//		}}
		//		className="tailwindRelative"
		//	>
		//		<button className="tailwindbtn">Show Me Tooltip</button>

		//		<span ref={tooltipRef} className="tailwindVisible">
		//			{tooltip}
		//		</span>
		//	</div>
		//</div>
	);
};

export default Position;
