import React from "react";
import SubHeader from "../components/Common/Headers/SubHeader";
import Layout from "../components/Common/Layout/Layout";
import Tag from "../components/Common/Tag/Tag";

const StylePage = () => {
	const styleData = [
		{ id: 1, type: "ping" },
		{ id: 2, type: "spin" },
		{ id: 3, type: "pulse" },
		{ id: 4, type: "bounce" },
	];
	return (
		<Layout>
			<SubHeader title="Style" desc={"All style would be scss 🤭"} />
			<Tag tagArray={styleData} />
		</Layout>
	);
};

export default StylePage;
