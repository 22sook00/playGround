import React, { useEffect, useState } from "react";
import "./progressBar.scss";
import * as S from "./ProgressBar.Styles";

const ProgressBar = () => {
	function ScrollTracker() {
		const pageHeight = document.body.scrollHeight - document.body.clientHeight;
		const [scrollY, setScrollY] = useState(0);
		useEffect(() => {
			const onScroll = () => {
				const s = window.pageYOffset;
				setScrollY(s);
			};
			window.addEventListener("scroll", onScroll, true);
			onScroll();
			return () => window.removeEventListener("scroll", onScroll);
		}, []);
		const ratio = 100 - (scrollY / pageHeight) * 100;
		return <S.ScrollTracker ratio={ratio} />;
	}
	return (
		<div className="progress-container">
			<S.Header>
				<S.ScrollBackground>
					<ScrollTracker />
				</S.ScrollBackground>
				<S.HeaderContents>Header</S.HeaderContents>
			</S.Header>
			<main>hi</main>
		</div>
	);
};

export default ProgressBar;
