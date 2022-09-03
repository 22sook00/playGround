import React, { FC } from "react";
import "./subHeader.scss";

type SubHeaderProps = {
	title: string;
	desc?: string;
};

const SubHeader: FC<SubHeaderProps> = ({ title, desc }) => {
	return (
		<header className="subheader-container">
			<h2>{title}</h2>
			{desc && <p>{desc}</p>}
		</header>
	);
};

export default SubHeader;
