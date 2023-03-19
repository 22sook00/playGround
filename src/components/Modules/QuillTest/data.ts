export const formats = [
	"header",
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
	"align",
	"color",
	"background",
];
export const toolbarOptions = [
	[{ header: [1, 2, false] }],
	["bold", "italic", "underline", "strike", "blockquote"],
	[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
	["link", "image"],
	[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
	["clean"],
];
export const modules = {
	toolbar: {
		container: "#toolbar",
		toolbar: toolbarOptions,
	},
};
