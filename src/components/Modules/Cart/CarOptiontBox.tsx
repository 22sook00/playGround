import React, { useCallback, useEffect, useState } from "react";
import "./cart.scss";

const CartOptionBox = ({ item, handleDelete, handleChangeQty }: any) => {
	const [isQtyValid, setIsQtyValid] = useState(false);
	const amountInputHandler = (e: { target: { value: string | number } }) => {
		handleChangeQty(item.id, "qty", +e.target.value);
	};
	const handleMinusClick = useCallback(
		(e: { preventDefault: () => void }) => {
			e.preventDefault();
			handleChangeQty(item.id, "qty", item.qty - 1);
		},
		[item.id, item.qty, handleChangeQty],
	);
	const handlePlusClick = useCallback(
		(e: { preventDefault: () => void }) => {
			e.preventDefault();
			handleChangeQty(item.id, "qty", item.qty + 1);
		},
		[item.qty, item.id, handleChangeQty],
	);

	useEffect(() => {
		setIsQtyValid(item.qty > 0);
	}, [item.qty]);

	return (
		<>
			<section>
				<h3>{item.name}</h3>
				<div>
					<button
						onClick={(e) => handleMinusClick(e)}
						disabled={!isQtyValid}
						className={!isQtyValid ? "disabled" : "minus"}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 12h-15"
							/>
						</svg>
					</button>
					<input value={item.qty} onChange={(e) => amountInputHandler(e)} />
					<button onClick={(e) => handlePlusClick(e)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
					</button>
				</div>
			</section>
			<section>
				<button onClick={() => handleDelete(item)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</section>
		</>
	);
};

export default CartOptionBox;
