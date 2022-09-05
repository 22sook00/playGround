import React from "react";
import "./Ping.scss";

const Ping = () => {
	//TODO size 별로 props 로 전달하여 ping 크기 다르게 나타내기
	//small medium large 세가지 형태
	return (
		<span className="ping-wrapper">
			<span className="ping-item" />
			<span className="ping-item-wrapper" />
		</span>
	);
};

export default Ping;
