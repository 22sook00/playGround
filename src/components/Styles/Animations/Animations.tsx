import React, { FC } from "react";
import Ping from "./Ping/Ping";

type AnimationsProps = {
	title: string;
	children: React.ReactNode;
};

const Animations: FC<AnimationsProps> = ({ title, children }) => {
	return (
		<section className="ground-container">
			<h2>{title}</h2>
			<article>{children}</article>
		</section>
	);
};

export default Animations;
