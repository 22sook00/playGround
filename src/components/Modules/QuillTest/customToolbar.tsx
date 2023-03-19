import React, { FC } from "react";
interface customToolbarProps {
	onClickRaw: () => void;
}
const customToolbar: FC<customToolbarProps> = ({ onClickRaw }) => {
	//const toolbarOptions = [
	//	["bold", "italic", "underline", "strike"], // toggled buttons
	//	["blockquote", "code-block"],

	//	[{ header: 1 }, { header: 2 }], // custom button values
	//	[{ list: "ordered" }, { list: "bullet" }],
	//	[{ script: "sub" }, { script: "super" }], // superscript/subscript
	//	[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
	//	[{ direction: "rtl" }], // text direction

	//	[{ size: ["small", false, "large", "huge"] }], // custom dropdown
	//	[{ header: [1, 2, 3, 4, 5, 6, false] }],

	//	[{ color: [] }, { background: [] }], // dropdown with defaults from theme
	//	[{ font: [] }],
	//	[{ align: [] }],

	//	["clean"], // remove formatting button
	//];
	return (
		<div id="toolbar">
			<select className="ql-header">
				alksdjflkasdj
				<option value="1"></option>
				<option value="2"></option>
			</select>
			<button className="ql-bold"></button>
			<button className="ql-italic"></button>
			<select className="ql-color">
				<option value="red"></option>
				<option value="green"></option>
				<option value="blue"></option>
				<option value="orange"></option>
				<option value="violet"></option>
				<option value="#d0d1d2"></option>
				<option selected></option>
			</select>
			<select className="ql-background"></select>
			<button className="ql-link"></button>
			<button className="ql-image"></button>
			<button onClick={onClickRaw}>HTML</button>
		</div>
	);
};

export default customToolbar;
