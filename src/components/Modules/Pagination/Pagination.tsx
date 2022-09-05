import React, { useCallback } from "react";

interface PaginationProps {
	currentIndex: number;
	totalPage: number;
	pageName: string;
	//handleClick?: (page: number) => void;
	count?: number;
}

function Pagination({
	currentIndex,
	totalPage,
	//handleClick,
	pageName,
	count,
}: PaginationProps): JSX.Element {
	const pages = [];
	const handleClick = useCallback((pageNumber: number) => {
		console.log("pageNumber?::", pageNumber);
	}, []);
	function PageItem(pageNumber: number) {
		return (
			<li onClick={() => handleClick(pageNumber)} key={pageNumber}>
				<a
					className={
						currentIndex === pageNumber ? "current-index" : "page-index"
					}
				>
					{pageNumber}
				</a>
			</li>
		);
	}

	if (totalPage < 6) {
		for (let i = 1; i <= totalPage; i++) {
			pages.push(PageItem(i));
		}
	} else {
		if (currentIndex >= 5) {
			if (totalPage - currentIndex < 4) {
				pages.push(PageItem(1));
				pages.push(<span key={"...1"}>...</span>);
				for (let i = totalPage - 4; i <= totalPage; i++) {
					pages.push(PageItem(i));
				}
			} else {
				pages.push(PageItem(1));
				pages.push(<span key={"...2"}>...</span>);
				for (let i = currentIndex - 2; i < currentIndex + 3; i++) {
					pages.push(PageItem(i));
				}
				pages.push(<span key={"...3"}>...</span>);
				pages.push(PageItem(totalPage));
			}
		} else {
			for (let i = 1; i <= 5; i++) {
				pages.push(PageItem(i));
			}

			pages.push(<span key={"...4"}>...</span>);
			pages.push(PageItem(totalPage));
		}
	}

	return (
		<section className="pagination-container">
			<h1>이전</h1>
			<nav className="pagination-wrapper" aria-label="Page Navigation">
				<ul className="pagination-list">{pages.map((page) => page)}</ul>
			</nav>
			<h1>다음</h1>
		</section>
	);
}

export default Pagination;
