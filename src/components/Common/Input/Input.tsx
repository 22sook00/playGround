import React, { FC, useState } from "react";
import "./input.scss";

interface InputProps {
	value?: string;
	handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, handleValue }) => {
	const [focus, setFocus] = useState<boolean>(false);

	return (
		<div
			className="input-container "
			onFocus={() => setFocus(true)}
			onBlur={() => setFocus(false)}
		>
			<div
				className={`input-base-root input-root ${
					focus ? "input-underline focusing" : "input-underline "
				}`}
			>
				<input className="input-wrapper" value={value} onChange={handleValue} />
			</div>
		</div>
	);
};

export default Input;
