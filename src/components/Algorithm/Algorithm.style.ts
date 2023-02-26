import styled from "@emotion/styled";

export const color = {
	$default: "#334155",
	$gray: "#506584",
	$point: "#54a6ea",
	$sub: "#2fdab6",
	$main: "#f5e334",
	$warning: "#da2f69",
	$border: "1px solid #ececec",
};
export const HanoiContainer = styled.main`
	display: grid;
	gap: 12px;
	grid-template-columns: 1fr 2fr;
`;
export const HanoiInfo = styled.section`
	border: ${color.$border};
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0px 1px 1px #00000030;
	word-break: keep-all;
	line-height: 1.5rem;
	> b {
		color: ${color.$sub};
	}
	ul {
		li {
			list-style: decimal;
		}
	}
`;
export const HanoiTowerContainer = styled.section`
	border-radius: 8px;
	box-shadow: 0px 1px 1px #00000030;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;
export const HanoiTowerWrapper = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
`;
export const HanoiPillars = styled.div`
	position: relative;
	bottom: 0;
	width: 100%;
	height: fit-content;
	min-height: 22px;
	padding: 4px 0;
	text-align: center;
	color: white;
	background-color: ${color.$gray};
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;

	> article {
		position: absolute;
		bottom: 32px;
		left: 45%;
		height: 300px;
		width: 12px;
		border-radius: 4px;
		background-color: ${color.$default};
	}
`;
export const HanoiDesc = styled.div<any>`
	position: absolute;
	bottom: calc(220px - ${(props) => `${props.widthProps * 45}px`});
	width: ${(props) => `${props.widthProps * 30}px`};
	padding: 18px 0;
	border-radius: 4px;
	background-color: ${(props) =>
		props.widthProps === 1
			? color.$point
			: props.widthProps === 2
			? color.$main
			: props.widthProps === 3
			? color.$warning
			: color.$sub};
	border: 3px solid;
	border-color: ${(props) =>
		props.widthProps === 1
			? color.$point
			: props.widthProps === 2
			? color.$main
			: props.widthProps === 3
			? color.$warning
			: color.$sub};
	transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19);
	cursor: pointer;
	&:hover {
		transition: all 0.3s;
		border: 3px solid ${color.$default};
	}
`;
