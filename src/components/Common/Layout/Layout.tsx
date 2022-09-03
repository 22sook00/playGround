import React, { FC } from "react";
import Header from "../Headers/Header";
import "./layout.scss";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={"layout"}>{children}</main>
		</>
	);
};

export default Layout;
