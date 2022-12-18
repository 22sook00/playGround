import React, { useCallback, useState } from "react";
import "./dropdown.scss";

const Dropdown = ({
	options,
	select,
	handleSelect,
	isOpenDropdown,
	setIsOpenDropdown,
}: any) => {
	return (
		<div className="dropdown-container">
			<div
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
				<ul className="dropdown-option-list">
					{options.map((list: any, idx: number) => {
						return (
							<li key={idx} onClick={() => handleSelect(list)}>
								{list.name}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
