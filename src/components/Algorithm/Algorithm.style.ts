import styled from "@emotion/styled";

export const color = {
	$default: "#828282",
	$point: "#e91e63",
	$sub: "#1ba935",
	$main: "#ffeb3b",
	$border: "1px solid #ececec",
};

export const HanoiInfo = styled.div`
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
