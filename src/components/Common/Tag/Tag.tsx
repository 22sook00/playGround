import React, { FC } from "react";
import { StyleProps } from "../../../pages/StylePage";
import "./tag.scss";

interface TagProps {
	tagArray: StyleProps[];
	handleClickTab: (types: StyleProps) => void;
}
const Tag: FC<TagProps> = ({ tagArray, handleClickTab }) => {
	//TODO select 되면 #0284c7 로 변경하기
	return (
		<aside className="tag-container">
			{tagArray.map((types) => {
				return (
					<button
						onClick={() => handleClickTab(types)}
						className="tag-item"
						key={types.id}
					>
						{types.type}
					</button>
				);
			})}
		</aside>
	);
};

export default Tag;
