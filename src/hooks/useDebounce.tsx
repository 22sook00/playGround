import React, { FC, useEffect, useState } from "react";

interface debounceProps {
	value: string | any;
	delay: number;
}

const useDebounce: FC<debounceProps> = ({ value, delay }) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};

export default useDebounce;
