import React, { useCallback, useEffect, useState } from "react";
import Button from "../../Common/Button/Button";
import Dropdown from "../../Common/Dropdown/Dropdown";
import CartOptionBox from "./CarOptiontBox";

const options = [
	{ id: 1, name: "화이트", price: 30000, qty: 1 },
	{ id: 2, name: "블랙", price: 30000, qty: 1 },
	{ id: 3, name: "그레이", price: 30000, qty: 1 },
	{ id: 4, name: "핑크", price: 35000, qty: 1 },
];

const Cart = () => {
	const [select, setSelect] = useState<any>([]);
	const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

	const handleSelect = useCallback(
		(list: any) => {
			const chkDupe = select.map((el: { id: any; qty: number }) => {
				if (el.id === list.id) {
					return { ...el, qty: el.qty + 1 };
				} else {
					return el;
				}
			});
			const chkIDX = select.findIndex((i: { id: any }) => i.id === list.id);
			if (chkIDX === -1) {
				setSelect([list, ...select]);
			} else {
				setSelect(chkDupe);
			}
			setIsOpenDropdown(false);
		},
		[select, setSelect],
	);

	const handleDelete = useCallback(
		(item: { name: any }) => {
			const filterItem = select.filter(
				(list: { name: any }) => list.name !== item.name,
			);
			setSelect(filterItem);
		},
		[select],
	);

	const handleChangeQty = (id: any, key: any, value: any) => {
		setSelect((prev: any[]) => {
			return prev.map((obj) => {
				if (obj.id === id) {
					return { ...obj, [key]: value };
				} else {
					return { ...obj };
				}
			});
		});
	};

	return (
		<div>
			<Dropdown
				options={options}
				select={select}
				handleSelect={handleSelect}
				isOpenDropdown={isOpenDropdown}
				setIsOpenDropdown={setIsOpenDropdown}
			/>

			{select?.map((item: any, idx: number) => {
				return (
					<div key={item.id} className="cart-option-box-container">
						<CartOptionBox
							handleDelete={handleDelete}
							item={item}
							idx={idx}
							select={select}
							setSelect={setSelect}
							handleChangeQty={handleChangeQty}
						/>
					</div>
				);
			})}
			<div style={{ display: "flex" }}>
				<Button size="small" color="primary">
					장바구니 담기
				</Button>
				<Button size="medium" color="secondary">
					장바구니 담기
				</Button>
				<Button size="large" color="light">
					장바구니 담기
				</Button>
			</div>
			<div>
				<Button size="full" color="secondary" outline>
					취소
				</Button>
			</div>
		</div>
	);
};

export default Cart;
