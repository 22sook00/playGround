import styled from "@emotion/styled";
interface ScrollTrackerProps {
	ratio: number;
}

export const Header = styled.div`
	/*width: 59.66%;*/
	width: 100%;
	height: 4rem;
	position: sticky;
	top: 63px;
	z-index: 2000;
	background: white;
	box-shadow: 0px 3px 3px #00000050;
`;

export const ScrollBackground = styled.div`
	position: relative;
	width: 100%;
	height: 0.5rem;
	background: linear-gradient(90deg, #4158d0 0%, #c850c0 100%);
`;

export const ScrollTracker = styled.div<ScrollTrackerProps>`
	position: absolute;
	right: 0;
	width: ${(props) => props.ratio}%;
	height: 0.5rem;
	background: white;
`;

export const HeaderContents = styled.div`
	height: calc(100% - 0.5rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #f8f8fd;
`;
