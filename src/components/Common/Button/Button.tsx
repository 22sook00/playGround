import React, { FC } from "react";
import "./button.scss";
import classNames from "classnames";

interface ButtonProps {
	children?: React.ReactNode;
	size?: "small" | "medium" | "large" | "full" | "custom";
	color?: "primary" | "secondary" | "light";
	outline?: boolean;
	onClick?: any;
	disabled?: boolean;
	type?: "submit" | "button";
}

const Button: FC<ButtonProps> = ({
	children,
	size = "medium",
	color = "primary",
	outline,
	onClick,
	type = "button",
	disabled = false,
	...rest
}) => {
	return (
		<button
			className={classNames("Button", size, color, { outline })}
			onClick={onClick}
			disabled={disabled}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
