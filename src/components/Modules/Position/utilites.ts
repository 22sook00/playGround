//ver1

export interface FakeMouseElement {
	getBoundingClientRect: () => {
		top: number;
		left: number;
		bottom: number;
		right: number;
		width: number;
		height: number;
	};
	clientWidth: number;
	clientHeight: number;
}

export function getMousePosition(mouseCoordinates: {
	top: number;
	left: number;
}): FakeMouseElement {
	const safeMouse = mouseCoordinates || { top: 0, left: 0 };
	const getBoundingClientRect = () => ({
		top: safeMouse.top,
		left: safeMouse.left,
		bottom: safeMouse.top,
		right: safeMouse.left,
		width: 0,
		height: 0,
	});

	return {
		getBoundingClientRect,
		clientWidth: 0,
		clientHeight: 0,
	};
}

//ver2. 결국 비슷함. 감싸고있는 컨테이너가 잘못되서 그랬던것임.
export const getTooltipPosition = (
	el: HTMLDivElement,
	tooltip: HTMLDivElement,
	position: string,
	gap: number,
) => {
	const {
		top: elTop,
		left: elLeft,
		height: elHeight,
		width: elWidth,
	} = el?.getBoundingClientRect();
	const { width: tooltipWidth, height: tooltipHeight } =
		tooltip.getBoundingClientRect();
	let correctedLeft = elLeft;
	let correctedTop = elTop;
	switch (position) {
		case "leftTop": {
			correctedLeft = elLeft - gap - tooltipWidth + 120;
			correctedTop = correctedTop - gap - tooltipHeight;
			break;
		}
		case "top": {
			correctedLeft = correctedLeft + elWidth / 2 - tooltipWidth / 2;
			correctedTop = correctedTop - gap - tooltipHeight;
			break;
		}
		case "rightTop": {
			correctedLeft = correctedLeft + elWidth - tooltipWidth - gap;
			correctedTop = correctedTop - gap - tooltipHeight;
			break;
		}
		case "left": {
			correctedLeft = elLeft - gap - tooltipWidth;
			correctedTop = correctedTop + elHeight / 2 - tooltipHeight / 2;
			break;
		}
		case "center": {
			correctedLeft = correctedLeft + elWidth / 2 - tooltipWidth / 2;
			correctedTop = correctedTop + elHeight / 2 - tooltipHeight / 2;
			break;
		}
		case "right": {
			correctedLeft = correctedLeft + elWidth + gap;
			correctedTop = correctedTop + elHeight / 2 - tooltipHeight / 2;
			break;
		}
		case "leftBottom": {
			correctedLeft = elLeft - gap - tooltipWidth + 120;
			correctedTop = correctedTop + elHeight + gap;
			break;
		}
		case "rightBottom": {
			correctedLeft = correctedLeft + elWidth - tooltipWidth - gap;
			correctedTop = correctedTop + elHeight + gap;
			break;
		}
		case "bottom":
		default:
			correctedLeft = correctedLeft + elWidth / 2 - tooltipWidth / 2;
			correctedTop = correctedTop + elHeight + gap;
	}
	return {
		left: correctedLeft,
		top: correctedTop,
	};
};
