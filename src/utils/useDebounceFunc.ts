const useDebounceFunc = (func: any, wait: number) => {
	let timeout: NodeJS.Timeout | null;
	return (...args: any) => {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const context = this;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			func.apply(context, args);
		}, wait);
	};
};

export default useDebounceFunc;
