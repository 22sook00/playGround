import React, { useState } from "react";
import * as S from "../Algorithm.style";

const Hanoi = () => {
	//hanoi 식
	const [desc, setDesc] = useState(4);
	//const hanoiFunc = () => {
	//	if()
	//}
	const descArr = Array.from({ length: desc }, (v, i) => i + 1).reverse();
	console.log("descArr", descArr);
	return (
		<S.HanoiContainer>
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
			<S.HanoiTowerContainer>
				<S.HanoiTowerWrapper>
					<S.HanoiPillars>
						<article />
						{descArr.map((el, idx: number) => {
							return <S.HanoiDesc key={idx} widthProps={el}></S.HanoiDesc>;
						})}

						<h3>A</h3>
					</S.HanoiPillars>

					<S.HanoiPillars>
						<article />
						<h3>B</h3>
					</S.HanoiPillars>
					<S.HanoiPillars>
						<article />
						<h3>C</h3>
					</S.HanoiPillars>
				</S.HanoiTowerWrapper>
			</S.HanoiTowerContainer>
		</S.HanoiContainer>
	);
};

export default Hanoi;
