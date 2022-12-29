export interface CopyListProps {
	id: number;
	type: string;
	text: string;
	order?: number;
}
export const copyList: CopyListProps[] = [
	{
		id: 1,
		type: "square",
		text: "네모네모",
	},
	{
		id: 2,
		type: "circle",
		text: "동글동글",
	},
	{
		id: 3,
		type: "triangle",
		text: "세모세모",
	},
];
