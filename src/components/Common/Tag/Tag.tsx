import React, { FC } from "react";
import "./tab.scss";

interface TagProps {
	tagArray: { id: number; type: string }[];
}
const Tag: FC<TagProps> = ({ tagArray }) => {
	return (
		<aside className="tab-container">
			{tagArray.map((types) => {
				return (
					<button className="tag-item" key={types.id}>
						{types.type}
					</button>
				);
			})}
		</aside>
	);
};

export default Tag;
