import React, { FC } from "react";
import "./input.scss";

interface InputProps {
	value?: string;
	handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, handleValue }) => {
	return (
		<input className="input-wrapper" value={value} onChange={handleValue} />
	);
};

export default Input;
