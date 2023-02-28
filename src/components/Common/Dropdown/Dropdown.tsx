import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
	useLayoutEffect,
} from "react";
import "./dropdown.scss";

const Dropdown = ({
	options,
	select,
	handleSelect,
	isOpenDropdown,
	setIsOpenDropdown,
}: any) => {
	const inputRef = useRef<any>(null);
	const optionRef = useRef<any>(null);
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [curPosition, setCurPosition] = useState<{ top: number; left: number }>(
		{ top: 0, left: 0 },
	);

	const browserHeight = window.innerHeight;
	const inputHeight = inputRef.current?.getBoundingClientRect().height;
	const optionListHeight = optionRef.current?.getBoundingClientRect().height;
	const handleScroll = () => {
		setScrollPosition(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const inputY = inputRef.current?.getBoundingClientRect().y;
		const inputX = inputRef.current?.getBoundingClientRect().x;

		const totalHeight = inputY + inputHeight + optionListHeight;

		if (totalHeight > browserHeight) {
			setCurPosition({
				top:
					browserHeight -
					(browserHeight - inputY - inputHeight - 8) -
					optionListHeight -
					inputHeight * 2 -
					8,
				left: inputX,
			});
		} else {
			setCurPosition({
				top: browserHeight - (browserHeight - inputY - inputHeight - 8),
				left: inputX,
			});
		}
	}, [scrollPosition, browserHeight, inputHeight, optionListHeight]);

	return (
		<div className="dropdown-container">
			<div
				ref={inputRef}
				className="dropdown-select"
				onClick={() => setIsOpenDropdown(!isOpenDropdown)}
			>
				{!select.length ? "선택안함" : select[0].name}

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</div>
			{isOpenDropdown && (
				<div
					className="dropdown-wrapper"
					style={{
						top: curPosition.top,
					}}
				>
					<ul ref={optionRef} className="dropdown-option-list">
						{options.map((list: any, idx: number) => {
							return (
								<li key={idx} onClick={() => handleSelect(list)}>
									{list.name}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
