import React, { useCallback, useState } from "react";
import SubHeader from "../components/Common/Headers/SubHeader";
import Layout from "../components/Common/Layout/Layout";
import Tag from "../components/Common/Tag/Tag";
import Animations from "../components/Styles/Animations/Animations";
import Bounce from "../components/Styles/Animations/Bounce";
import Ping from "../components/Styles/Animations/Ping/Ping";
import Pulse from "../components/Styles/Animations/Pulse/Pulse";
import Spin from "../components/Styles/Animations/Spin/Spin";

export interface StyleProps {
	id: number;
	type: string;
	component: React.ReactNode;
}

const StylePage = () => {
	const styleData: StyleProps[] = [
		{ id: 1, type: "ping", component: <Ping /> },
		{ id: 2, type: "spin", component: <Spin /> },
		{ id: 3, type: "pulse", component: <Pulse /> },
		{ id: 4, type: "bounce", component: <Bounce /> },
	];

	const [selectMenu, setSelectMenu] = useState<StyleProps>(styleData[0]);

	const handleClickTab = useCallback((typeObj: StyleProps) => {
		const selectType = styleData.find(
			(select) => select.id === typeObj.id,
		) as StyleProps;
		setSelectMenu(selectType);
	}, []);
	return (
		<Layout>
			<SubHeader title="Style" desc={"All style would be scss 🤭"} />
			<section className="grid-wrapper">
				<Tag tagArray={styleData} handleClickTab={handleClickTab} />
				<Animations title={selectMenu.type}>{selectMenu.component}</Animations>
			</section>
		</Layout>
	);
};

export default StylePage;
