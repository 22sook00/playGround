import React, { useCallback, useState } from "react";
import SubHeader from "../components/Common/Headers/SubHeader";
import Layout from "../components/Common/Layout/Layout";
import Tag from "../components/Common/Tag/Tag";
import Calendar from "../components/Modules/Calendar/Calendar";
import Carousel from "../components/Modules/Carousel/Carousel";
import Cart from "../components/Modules/Cart/Cart";
import DragnDrop from "../components/Modules/DragnDrop/DragnDrop";
import Pagination from "../components/Modules/Pagination/Pagination";
import Accordion from "../components/Modules/Accordion/Accordion";
import SlimeTest from "components/Modules/SlimeTest/SlimeTest";
import ScrollTo from "components/Modules/ScrollTo/ScrollTo";
import Position from "components/Modules/Position/Position";

export interface ModuleProps {
	id: number;
	type: string;
	component: React.ReactNode;
}

const ModulePage = () => {
	const moduleData: ModuleProps[] = [
		{ id: 1, type: "position", component: <Position /> },
		{ id: 2, type: "scrollTo", component: <ScrollTo /> },
		{ id: 3, type: "carousel", component: <Carousel /> },
		{ id: 4, type: "calendar", component: <Calendar /> },
		{ id: 5, type: "accordion", component: <Accordion /> },
		{ id: 6, type: "dragndrop", component: <DragnDrop /> },
		{ id: 7, type: "cart", component: <Cart /> },
		{
			id: 8,
			type: "pagination",
			component: <Pagination />,
		},
		{ id: 9, type: "slimeTest", component: <SlimeTest /> },
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
