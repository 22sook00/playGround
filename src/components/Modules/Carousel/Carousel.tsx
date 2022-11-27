import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
//import styles from "./carousel.module.scss";

interface CarouselProps {
	children?: React.ReactNode;
	buttonSize?: number;
}

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 600 : -600,
		};
	},
	center: {
		x: 0,
		y: 0,
	},
	exit: (direction: number) => {
		return {
			x: direction < 0 ? 550 : -550,
		};
	},
};

function Carousel({
	children,
	buttonSize,
	...restProps
}: CarouselProps): JSX.Element {
	const imgList = [
		{ id: 1, text: "ralral" },
		{ id: 2, text: "asdfa" },
		{ id: 3, text: "cbsdbfh" },
		{ id: 4, text: "hihihihih" },
		{ id: 5, text: "papapapappa fff" },
		{ id: 6, text: "mmmmmmmm" },
	];
	const [[currentIndex, direction], setSlide] = useState<Array<number>>([0, 0]);
	const [isAnimationEnd, setIsAnimationEnd] = useState(true);

	const slideMove = (newDirection: number) => {
		setSlide([currentIndex + newDirection, newDirection]);
	};

	const handlePrev = () => {
		if (currentIndex <= 0) return;
		slideMove(-1);
	};

	const handleNext = () => {
		if (currentIndex >= imgList.length - 1) return;
		slideMove(1);
	};

	const handleSetIsAnimationEnd = () => {
		setIsAnimationEnd(true);
	};

	return (
		<div className={"container"}>
			<div className={"imageContainer"} {...restProps}>
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={currentIndex}
						custom={direction}
						onAnimationComplete={handleSetIsAnimationEnd}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						style={{
							//backgroundImage: `url(${imgList[currentIndex]?.location})`,
							//backgroundSize: "cover",
							//backgroundPosition: "center",
							backgroundColor: "greenyellow",
							width: "50%",
							height: "50%",
						}}
						transition={{
							x: { type: "tween", duration: 0.8 },
						}}
					/>
				</AnimatePresence>
				{/*{imgList}*/}
			</div>
			{currentIndex !== 0 && (
				<p
					onClick={(e) => {
						e.preventDefault();
						if (isAnimationEnd) handlePrev();
						setIsAnimationEnd(false);
					}}
				>
					👈🏻
				</p>
			)}
			{currentIndex !== imgList.length - 1 && (
				<p
					onClick={(e) => {
						e.preventDefault();
						if (isAnimationEnd) handleNext();
						setIsAnimationEnd(false);
					}}
				>
					👉🏻
				</p>
			)}
		</div>
	);
}

export default Carousel;
