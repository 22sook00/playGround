import Button from "components/Common/Button/Button";
import React, { FC, SetStateAction } from "react";
import { CopyListProps } from "./slimeDummy";
import "./slimeTest.scss";

interface SlimeListProps {
	data: CopyListProps;
	handleClick: (data: CopyListProps) => void;
}

const SlimeList: FC<SlimeListProps> = ({ data, handleClick }) => {
	return (
		<Button
			size="large"
			color={
				data.type === "square"
					? "secondary"
					: data.type === "circle"
					? "primary"
					: "light"
			}
			onClick={() => handleClick(data)}
		>
			{data.text}
		</Button>
	);
};

export default SlimeList;
