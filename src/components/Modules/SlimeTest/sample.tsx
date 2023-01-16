import React from "react";

const isAdmin = true;

type Price = {
	price: number;
	count?: number;
	period?: number;
};

type FormData = {
	email: string;
	password: string;
	name?: string;
	phone?: string;
	gender?: "F" | "M";
	centerName: string;
	priceList: Price[];
	multipointSetting?: {
		unusableDays: number[];
	};
};

const sample = () => {
	//isAdmin 이 트루면 멀티포인트 세팅을 넣고 아니면 넣지말아라
	const submit = (data: FormData) => {
		const formData = {
			email: data.email,
			password: data.password,
			name: data.name,
			phone: data.phone,
			gender: data.gender,
			centerName: data.centerName,
			priceList: data.priceList,
			...(isAdmin && { multipointSetting: data.multipointSetting }),
		};

		// ... submit
		console.log(formData);
	};

	return <div>sample</div>;
};

export default sample;
