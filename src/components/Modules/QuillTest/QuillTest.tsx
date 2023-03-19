import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./customToolbar";
import "./quill.scss";

const QuillTest = () => {
	const data = "lorem <b>ipsum</b> \b <h2>hihi</h2>";
	const [isOpenHTML, setIsOpenHTML] = useState(false);
	const [editor_html, setEditorHTML] = useState<string>(data);
	const handleClickShowRaw = (): void => {
		setIsOpenHTML((prev) => !prev);
	};

	return (
		<>
			<CustomToolbar onClickRaw={handleClickShowRaw} />
			<div className="quillContainer">
				<ReactQuill
					theme="snow"
					value={editor_html}
					onChange={(html): void => setEditorHTML(html)}
					modules={{
						toolbar: {
							container: "#toolbar",
							handlers: {},
						},
					}}
					formats={[
						"header",
						"font",
						"size",
						"bold",
						"italic",
						"underline",
						"strike",
						"blockquote",
						"list",
						"bullet",
						"indent",
						"link",
						"image",
						"color",
					]}
				/>
				{isOpenHTML && (
					<div className="raw-html-section">
						<textarea
							className={"raw-editor"}
							onChange={(e): void => setEditorHTML(e.target.value)}
							value={editor_html}
						/>
						<button>copy</button>
					</div>
				)}
			</div>
		</>
	);
};

export default QuillTest;
