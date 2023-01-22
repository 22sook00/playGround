import Button from "components/Common/Button/Button";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { dummyData } from "./dummyData";
import ScrollComp1 from "./ScrollComp1";
import ScrollComp2 from "./ScrollComp2";
import ScrollComp3 from "./ScrollComp3";
import "./scrollTo.scss";
import useMoveToScroll from "../../../hooks/useMoveToScroll";
import { useThemeObserver } from "../../../hooks/useThemeObserver";
import Input from "components/Common/Input/Input";
import useDebounce from "hooks/useDebounce";
import useDebounceFunc from "utils/useDebounceFunc";
export interface ScrollCompProps {
	isRef: any;
}
const ScrollTo = () => {
	const debounceRef = useRef();
	const [searchText, setSearchText] = useState<string>("");
	const [searchText1, setSearchText1] = useState<string>("");
	const [searchText2, setSearchText2] = useState<string>("");
	const [btnStatus, setBtnStatus] = useState<boolean>(false);

	useEffect(() => {
		const timer = setInterval(() => {
			window.addEventListener("scroll", handleScroll);
		}, 100);
		return () => {
			clearInterval(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 400) {
			setBtnStatus(true);
		} else {
			setBtnStatus(false);
		}
	};

	//const handleScroll = () => {
	//	console.log("scrolled");
	//};
	console.log("btnStatus:", btnStatus);

	const sliceDummy = dummyData.slice(0, 3);
	const [navNumber, setNavNumber] = useState(1);

	const [comp1] = useThemeObserver(setNavNumber, 1);
	const [comp2] = useThemeObserver(setNavNumber, 2);
	const [comp3] = useThemeObserver(setNavNumber, 3);

	const handleMoveTo = useCallback(
		(idx: number) => {
			const compRef = idx === 1 ? comp1 : idx === 2 ? comp2 : (comp3 as any);

			const headerOffset = 145;
			const element = compRef.current;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - headerOffset;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		},
		[comp1, comp2, comp3],
	);
	const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		console.log("??", e);
		setSearchText(e.target.value);
	}, []);
	const handleSearchDebounceHook = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			console.log("??", e);
			setSearchText1(e.target.value);
		},
		[],
	);

	const debounceText = useDebounce({ value: searchText1, delay: 500 });
	useEffect(() => {
		// Do fetch here...
		// Triggers when "debouncedValue" changes
	}, [debounceText]);

	//function 이용.
	const handleSearchDebounceFunc = useDebounceFunc(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSearchText2(e.target.value);
		},
		500,
	);

	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			console.log("text", searchText, searchText1, "searchText2", searchText2);
		},
		[searchText, searchText1, searchText2],
	);

	return (
		<>
			<section className="search-container">
				<form onSubmit={handleSubmit}>
					<div>
						<h4>{searchText}</h4>
						<h4>{debounceText}</h4>
						<h4>{searchText2}</h4>
					</div>
					<div>
						<Input handleValue={handleSearch} value={searchText} />
						<Input handleValue={handleSearchDebounceHook} />
						<Input handleValue={handleSearchDebounceFunc} />
						<Button type={"submit"} color="secondary">
							제출
						</Button>
					</div>
				</form>
			</section>
			<section className="scroll-container" id="targetElement">
				<section className="tab-container">
					{sliceDummy.map((el: any, idx: number) => {
						return (
							<div
								key={idx}
								style={
									navNumber === el.id
										? { color: "darkBlue" }
										: { color: "rgb(100, 102, 118)" }
								}
								onClick={() => handleMoveTo(el.id)}
							>
								{el.title}
							</div>
						);
					})}
				</section>
				<div className="scroll-wrapper">
					<ScrollComp1 isRef={comp1} />
					<ScrollComp2 isRef={comp2} />
					<ScrollComp3 isRef={comp3} />
				</div>

				{btnStatus && (
					<div className="button-wrapper">
						<Button>버튼</Button>
					</div>
				)}
			</section>
		</>
	);
};

export default ScrollTo;
function throttle(
	handleScroll: () => void,
	arg1: number,
): (this: Window, ev: Event) => any {
	throw new Error("Function not implemented.");
}
