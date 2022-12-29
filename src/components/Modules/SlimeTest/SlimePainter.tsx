import React, { FC, SetStateAction } from "react";
import { useCallback } from "react";
import { CopyListProps } from "./slimeDummy";
import SlimeList from "./SlimeList";

interface SlimePainterProps {
	copy: CopyListProps[];
	setFocus: React.Dispatch<SetStateAction<number | undefined>>;
}

const SlimePainter: FC<SlimePainterProps> = ({ copy, setFocus }) => {
	const handleClickCopiedItem = useCallback(
		(data: CopyListProps) => {
			console.log("ddddd", data);
			setFocus(data.order);
		},
		[setFocus],
	);

	return (
		<div className="slime-painter-container">
			{copy.map((el, idx) => {
				return (
					<div key={idx}>
						<SlimeList data={el} handleClick={handleClickCopiedItem} />
					</div>
				);
			})}
		</div>
	);
};

export default SlimePainter;
