import React, { useCallback, useState } from "react";
import "./pagination.scss";
//interface PaginationProps {
//	currentIndex: number;
//	totalPage: number;
//	pageName?: string;
//	//handleClick?: (page: number) => void;
//	count?: number;
//}

function Pagination(): JSX.Element {
	const [currentIndex, setCurrentIndex] = useState<number>(1);
	const totalPage = 20;
	const pages = [];

	const handleClick = useCallback((pageNumber: number) => {
		setCurrentIndex(pageNumber);
	}, []);

	if (totalPage < 6) {
		for (let i = 1; i <= totalPage; i++) {
			pages.push(i);
		}
	} else {
		if (currentIndex >= 5) {
			if (totalPage - currentIndex < 4) {
				pages.push(1);
				pages.push(<span key={"...1"}>...</span>);
				for (let i = totalPage - 4; i <= totalPage; i++) {
					pages.push(i);
				}
			} else {
				pages.push(1);
				pages.push(<span key={"...2"}>...</span>);
				for (let i = currentIndex - 2; i < currentIndex + 3; i++) {
					pages.push(i);
				}
				pages.push(<span key={"...3"}>...</span>);
				pages.push(totalPage);
			}
		} else {
			for (let i = 1; i <= 5; i++) {
				pages.push(i);
			}

			pages.push(<span key={"...4"}>...</span>);
			pages.push(totalPage);
		}
	}

	return (
		<section className="pagination-container">
			<h1>◀️</h1>
			<ul className="pagination-list">
				{pages.map((page, idx) => {
					return (
						<li
							className={currentIndex === page ? "current-index" : "page-index"}
							onClick={() => handleClick(+page)}
							key={idx}
						>
							{page}
						</li>
					);
				})}
			</ul>

			<h1>▶️</h1>
		</section>
	);
}

export default Pagination;
