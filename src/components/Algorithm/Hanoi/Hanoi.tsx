import React, { useEffect, useRef, useState } from "react";
import * as S from "../Algorithm.style";

const Hanoi = () => {
	//hanoi 식
	const [towerArr, setTowerArr] = useState<number[]>([]);
	const descArr = Array.from({ length: 4 }, (v, i) => i + 1).reverse();

	const [box, setBox] = useState<any>([]);
	const [targets, setTargets] = useState<any>([]);

	const [posX, setPosX] = useState<number>(0);
	const [posY, setPosY] = useState<number>(0);
	const [originalX, setOriginalX] = useState<number>(0);
	const [originalY, setOriginalY] = useState<number>(0);

	const hanoiFunc = (num: number, A: any, B: any, C: any) => {
		if (num === 1) {
			return setTowerArr([A, B]);
		}

		hanoiFunc(num - 1, A, B, C);
		setTowerArr([A, C]);
		hanoiFunc(num - 1, B, C, A);
	};

	const handleMove = (num: number) => {
		hanoiFunc(num, 1, 3, 2);
		return console.log("towerArr:", towerArr);
	};

	const stockContainer = useRef<any>();

	useEffect(() => {
		const box = stockContainer.current.getBoundingClientRect();
		setBox({
			top: box.top,
			left: box.left,
			bottom: box.top + box.height,
			right: box.left + box.width,
		});
	}, []);
	//https://ko.javascript.info/mouse-drag-and-drop
	//https://velog.io/@yunsungyang-omc/React-Drag-Drop-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
	//https://velog.io/@dosilv/React-Drag-and-Drop-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
	//참고하여 드래그 구현하기

	const dragStartHandler = (e: any) => {
		const img = new Image();
		e.dataTransfer.setDragImage(img, 0, 0);
		setPosX(e.clientX);
		setPosY(e.clientY);
		setOriginalX(e.target.offsetLeft);
		setOriginalY(e.target.offsetTop);
	};

	const dragHandler = (e: any) => {
		e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
		e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
		setPosX(e.clientX);
		setPosY(e.clientY);
	};

	const dragEndHandler = (e: any) => {
		if (
			box.left < e.clientX &&
			e.clientX < box.right &&
			box.top < e.clientY &&
			e.clientY < box.bottom
		) {
			setTargets((targets: any) => {
				const newTargets = [...targets];
				newTargets.push({
					id: parseInt(e.timeStamp),
					top: e.target.offsetTop + e.clientY - posY,
					left: e.target.offsetLeft + e.clientX - posX,
				});
				return newTargets;
			});
		}

		e.target.style.left = `${originalX}px`;
		e.target.style.top = `${originalY}px`;
	};

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
							return (
								<S.HanoiDesc
									ref={stockContainer}
									//onClick={() => handleMove(el)}
									onMouseOver={(e: any) => dragEndHandler(e)}
									key={idx}
									widthProps={el}
								></S.HanoiDesc>
							);
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
