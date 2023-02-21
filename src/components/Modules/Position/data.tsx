import { positionDummyProps } from "./Position";

export const dummy: positionDummyProps[] = [
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

export const secondDummy: positionDummyProps[] = [
	{ id: 1, item: "top", belongTo: "top" },
	{ id: 2, item: "left", belongTo: "left" },
	{ id: 3, item: "right", belongTo: "right" },
	{ id: 4, item: "bottom", belongTo: "bottom" },
];
