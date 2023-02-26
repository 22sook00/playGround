import Dupe from "components/Algorithm/Dupe";
import Hanoi from "components/Algorithm/Hanoi";
import SubHeader from "components/Common/Headers/SubHeader";
import Layout from "components/Common/Layout/Layout";
import Tag from "components/Common/Tag/Tag";
import React, { useCallback, useState } from "react";
import { ModuleProps } from "./ModulePage";

const AlgorithmPage = () => {
	const moduleData: ModuleProps[] = [
		{ id: 1, type: "하노이의탑", component: <Hanoi /> },
		{ id: 2, type: "중복제거", component: <Dupe /> },
	];
	const [selectMenu, setSelectMenu] = useState<ModuleProps>(moduleData[0]);

	const handleClickTab = useCallback((typeObj: ModuleProps) => {
		const selectType = moduleData.find(
			(select) => select.id === typeObj.id,
		) as ModuleProps;
		setSelectMenu(selectType);
	}, []);

	return (
		<Layout>
			<SubHeader title="Algorithm" desc={"Make my brain more algorithmic 💭"} />
			<section className="grid-wrapper">
				<Tag tagArray={moduleData} handleClickTab={handleClickTab} />
				<section className="ground-container">
					<h2>{selectMenu.type}</h2>
					<article>{selectMenu.component}</article>
				</section>
			</section>
		</Layout>
	);
};

export default AlgorithmPage;
