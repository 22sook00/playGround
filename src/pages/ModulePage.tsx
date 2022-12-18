import React, { useCallback, useState } from "react";
import Dropdown from "../components/Common/Dropdown/Dropdown";
import SubHeader from "../components/Common/Headers/SubHeader";
import Layout from "../components/Common/Layout/Layout";
import Tag from "../components/Common/Tag/Tag";
import Calendar from "../components/Modules/Calendar/Calendar";
import Carousel from "../components/Modules/Carousel/Carousel";
import Cart from "../components/Modules/Cart/Cart";
import DragnDrop from "../components/Modules/DragnDrop/DragnDrop";
import Pagination from "../components/Modules/Pagination/Pagination";
import Radio from "../components/Modules/Radio/Radio";

export interface ModuleProps {
	id: number;
	type: string;
	component: React.ReactNode;
}

const ModulePage = () => {
	const moduleData: ModuleProps[] = [
		{
			id: 1,
			type: "pagination",
			component: <Pagination />,
		},
		{ id: 2, type: "carousel", component: <Carousel /> },
		{ id: 3, type: "calendar", component: <Calendar /> },
		{ id: 4, type: "radio", component: <Radio /> },
		{ id: 5, type: "dragndrop", component: <DragnDrop /> },
		{ id: 6, type: "cart", component: <Cart /> },
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
			<SubHeader
				title="Module"
				desc={"Make basic components without library 🤭"}
			/>
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

export default ModulePage;
