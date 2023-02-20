import React, { useCallback, useEffect, useRef, useState } from "react";
import "./position.scss";

interface positionDummyProps {
	id: number;
	item: string;
}

const dummy: positionDummyProps[] = [
	{ id: 1, item: "leftTop" },
	{ id: 2, item: "top" },
	{ id: 3, item: "rightTop" },
	{ id: 4, item: "left" },
	{ id: 5, item: "center" },
	{ id: 6, item: "right" },
	{ id: 7, item: "leftBottom" },
	{ id: 8, item: "bottom" },
	{ id: 9, item: "rightBottom" },
];

const Position = () => {
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

	//second
	const [hideElement, setHideElement] = useState<boolean>(false);
	const scrollRef = useRef<any>(null);

	useEffect(() => {
		if (!scrollRef.current) return;
		window.addEventListener("scroll", yScrollEvent);
		return () => {
			window.removeEventListener("scroll", yScrollEvent);
		};
	}, []);

	const yScrollEvent = () => {
		const scroll = scrollRef.current.getBoundingClientRect();
		//console.log(scroll);
		setHideElement(scroll.top <= -100);
	};

	//third

	return (
		//<div className="position-container">
		//	<div className="position-scroll-box">
		//		<section className="position-grid-box">
		//			{dummy.map((list: positionDummyProps) => {
		//				return (
		//					<div
		//						key={list.id}
		//						className="position-grid-col"
		//						onClick={() => handleClick(list)}
		//					>
		//						<>{list.item}</>
		//						{isPositionBox && positionContent.id === list.id && (
		//							<div className="position-box">{positionContent.item}</div>
		//						)}
		//					</div>
		//				);
		//			})}
		//		</section>
		//	</div>
		//</div>

		<div style={{ height: "200vh", background: "#f9f9fb" }} ref={scrollRef}>
			{!hideElement && (
				<div style={{ position: "fixed", background: "#fff" }}>
					<span>스크롤을 일정 수치만큼 내리면 이 영역은 사라집니다!</span>
				</div>
			)}
		</div>
	);
};

export default Position;
