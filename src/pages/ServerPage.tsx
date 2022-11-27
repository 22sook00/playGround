import React, { useCallback, useState } from "react";
import SubHeader from "../components/Common/Headers/SubHeader";
import Layout from "../components/Common/Layout/Layout";
import Tag from "../components/Common/Tag/Tag";
import GraphQlStudy from "../components/Servers/GraphQulStudy/GraphQlStudy";
import PHPStudy from "../components/Servers/PHPStudy/PHPStudy";
export interface ServerProps {
	id: number;
	type: string;
	component: React.ReactNode;
}
const ServerPage = () => {
	const serverData: ServerProps[] = [
		{
			id: 1,
			type: "PHPStudy",
			component: <PHPStudy />,
		},
		{ id: 2, type: "GraphQlStudy", component: <GraphQlStudy /> },
	];

	const [selectMenu, setSelectMenu] = useState<ServerProps>(serverData[0]);

	const handleClickTab = useCallback((typeObj: ServerProps) => {
		const selectType = serverData.find(
			(select) => select.id === typeObj.id,
		) as ServerProps;
		setSelectMenu(selectType);
	}, []);
	return (
		<Layout>
			<SubHeader title="Module" desc={"Study data fetching way section 🤭"} />
			<section className="grid-wrapper">
				<Tag tagArray={serverData} handleClickTab={handleClickTab} />
				<section className="ground-container">
					<h2>{selectMenu.type}</h2>
					<article>{selectMenu.component}</article>
				</section>
			</section>
		</Layout>
	);
};

export default ServerPage;
