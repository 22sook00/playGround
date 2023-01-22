import React, { FC, useEffect, useMemo, useState } from "react";
interface debounceProps {
	func: any;
	delay: number;
}

const useDebounceMemo: FC<debounceProps> = ({ func, delay }) => {
	const [time, setTime] = useState<any>(null);
	// eslint-disable-next-line @typescript-eslint/no-this-alias
	const context = this;
	useEffect(() => {
		if (time) {
			clearTimeout(time);
		}
		setTime(
			setTimeout(() => {
				setTime(null);
				func(context);
			}, delay),
		);
	}, [func]);

	return time;
};

export default useDebounceMemo;
//export default function useDebounce(func: any, delay: number | undefined) {
//	const [id, setId] = useState<any>(null);

//	return useMemo(
//		(...args) => {
//			if (id) {
//				clearTimeout(id);
//			} else {
//				setId(
//					setTimeout(() => {
//						setId(null);
//						func(...args);
//					}, delay),
//				);
//			}
//		},
//		[func],
//	);
//}
