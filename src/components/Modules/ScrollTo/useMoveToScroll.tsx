import React, { useRef } from "react";

const useMoveToScroll = () => {
	const element = useRef<HTMLDivElement>(null);
	const onMoveToElement = () => {
		element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	return { element, onMoveToElement };
};

export default useMoveToScroll;
