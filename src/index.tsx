import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServerPage from "./pages/ServerPage";
import ModulePage from "./pages/ModulePage";
import StylePage from "./pages/StylePage";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/style" element={<StylePage />} />
			<Route path="/server" element={<ServerPage />} />
			<Route path="/module" element={<ModulePage />} />
		</Routes>
	</BrowserRouter>,
);
