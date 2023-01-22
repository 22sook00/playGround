//import { useEffect, useState } from "react";

//const useThrottle = (callbackFunc: () => void, time: number): any => {
//	const [isWaiting, setIsWaiting] = useState(false);

//	useEffect(() => {
//		if (!isWaiting) {
//			callbackFunc();
//			setIsWaiting(true); // 함수가 호출되자마자 true로 바꾸어 호출 중단

//			setTimeout(() => {
//				// 특정 시간 이후에 false로 바꾸어 재호출
//				setIsWaiting(false);
//			}, time);
//		}
//	}, [callbackFunc, isWaiting, time]);
//};

//export default useThrottle;

function useThrottle(
	callbackFn: { call: () => void },
	limit: number | undefined,
) {
	let wait = false;
	return function () {
		if (!wait) {
			callbackFn.call();
			wait = true;
			setTimeout(function () {
				wait = false;
			}, limit);
		}
	};
}
export default useThrottle;
