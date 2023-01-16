import { useEffect, useState } from "react";

const useThrottle = (callbackFunc: () => void, time: number): any => {
	const [isWaiting, setIsWaiting] = useState(false);

	useEffect(() => {
		if (!isWaiting) {
			callbackFunc();
			setIsWaiting(true); // 함수가 호출되자마자 true로 바꾸어 호출 중단

			setTimeout(() => {
				// 특정 시간 이후에 false로 바꾸어 재호출
				setIsWaiting(false);
			}, time);
		}
	}, [callbackFunc, isWaiting, time]);
};

export default useThrottle;

//import { useRef } from "react";

//function useThrottle(cb: () => void, limit: number) {
//	const lastRun = useRef(Date.now());

//	return function () {
//		if (Date.now() - lastRun.current >= limit) {
//			cb();
//			lastRun.current = Date.now();
//		}
//	};
//}

//export default useThrottle;
