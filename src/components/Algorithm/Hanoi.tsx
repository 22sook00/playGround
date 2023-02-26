import React from "react";
import * as S from "./Algorithm.style";

const Hanoi = () => {
	return (
		<>
			<S.HanoiInfo>
				<b>Q. </b>
				하노이의 탑은 세개의 기둥으로 이루어져 있다.
				<br />
				첫번째 기둥에 꽃혀진 n개의 원판들은 크기순서대로 꽃혀져 있고, 다음과
				같은 조건을 충족하며 목적지기둥으로 옮겨야 한다.
				<ul>
					<li>원판은 하나씩 옮길 수 있다.</li>
					<li>큰 원판은 작은원판 위에 올 수 없다.</li>
				</ul>
				만약 첫번째 기둥에 있는 원판의 개수 n이 매개변수로 주어진다면, 3번
				원판으로 최소로 옮기는 방법을 return하는 식을 구하는게 하노이의 탑
				문제이다.
			</S.HanoiInfo>
		</>
	);
};

export default Hanoi;
