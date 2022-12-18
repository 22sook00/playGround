import React, { FC } from "react";
import "./button.scss";
import classNames from "classnames";

interface ButtonProps {
	children: React.ReactNode;
	size?: "small" | "medium" | "large" | "full" | "custom";
	color?: "primary" | "secondary" | "light";
	outline?: boolean;
}

const Button: FC<ButtonProps> = ({
	children,
	size,
	color,
	outline,
	...rest
}) => {
	return (
		<button
			className={classNames("Button", size, color, { outline })}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
