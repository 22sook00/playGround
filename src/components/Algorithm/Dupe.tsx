import React, { useEffect, useState } from "react";

type twoDimensionalArrProps = [string, { type: string }];
interface oneDimensionalArrProps {
	name: string;
	type: string;
}
const oneDimensionalArr: oneDimensionalArrProps[] = [
	{ name: "abc", type: "에이비씨1" },
	{ name: "def", type: "디이에프1" },
	{ name: "abc", type: "에이비씨2" },
	{ name: "abc", type: "에이비씨3" },
	{ name: "ghi", type: "쥐에이치아이" },
	{ name: "def", type: "디이에프2" },
];
const twoDimensionalArr: twoDimensionalArrProps[] = [
	["abc", { type: "에이비씨1" }],
	["def", { type: "디이에프1" }],
	["abc", { type: "에이비씨2" }],
	["abc", { type: "에이비씨3" }],
	["ghi", { type: "쥐에이치아이" }],
	["def", { type: "디이에프2" }],
];
//const objData = [["abc"], ["def"], ["abc"], ["abc"], ["ghi"], ["def"]];
const Dupe = () => {
	const [twoDimensional, setTwoDimensional] = useState<any>([]);
	useEffect(() => {
		//중복을 먼저 찾는다. 같은값일 경우 type에 이어서 넣는다.
		const findDupe = twoDimensionalArr.reduce((acc: any, cur: any) => {
			//current의 0 번째값을 키로 둔다.
			const key = cur[0];
			//중복을 찾기
			//만약 누적값인 acc[key]가 undefined 면 acc[key] 는 내가 넣기원하는 값이 되고,
			//acc[key]가 이미 있는 상태라면 거기에 내가넣기 원하는 값을 추가해준다.
			acc[key] ? acc[key].push(cur[1]) : (acc[key] = [cur[1]]);
			return acc;
		}, []);
		setTwoDimensional(findDupe);
	}, []);

	return (
		<section>
			<h3>1차원 배열</h3>
			<h4>배열안에 같은 중복값이 있는것끼리 합쳐 타입안에 넣는다. </h4>

			<h3>2차원 배열</h3>
			<div>
				{Object.entries(twoDimensional).map((el: any, idx: number) => {
					console.log(el);
					return (
						<div key={idx}>
							<p>{el[0]}</p>
							{el[1].map((ele: any, id: number) => {
								return <div key={id}>{ele.type}</div>;
							})}
						</div>
					);
				})}
			</div>
			<h1>{twoDimensional[0]}</h1>
		</section>
	);
};

export default Dupe;
