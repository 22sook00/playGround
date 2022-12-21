import React, { useState } from "react";
import { accordionDummy } from "./accordionDummy";
import "./accordion.scss";

const Accordion = () => {
	const [selected, setSelected] = useState<number | null>(null);
	const handleToggle = (i: number) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	};
	return (
		<div className="accordion-wrapper">
			<div className="accordion">
				{accordionDummy.map((item, i) => {
					return (
						<div key={i}>
							<div className="item">
								<div className="title" onClick={() => handleToggle(i)}>
									<h4>{item.title}</h4>
									{selected === i ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 8.25l-7.5 7.5-7.5-7.5"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 15.75l7.5-7.5 7.5 7.5"
											/>
										</svg>
									)}
								</div>
								<div
									className={`${selected === i ? "contents show" : "contents"}`}
								>
									{item.content}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Accordion;
