import React, { useState, useRef, useCallback } from "react";
import "./DragnDrop.scss";

export const ImageUpload = () => {
	const [image, setImage] = useState([]);
	const fileInput = useRef(null);

	const handleFile = (file) => {
		let selectFiles = [];
		let files = file;
		for (const file of selectFiles) {
			files = [
				...files,
				{
					file,
				},
			];
		}
		setImage([...image, { files, url: URL.createObjectURL(file) }]);
	};

	const handleOndragOver = (event) => {
		event.preventDefault();
	};
	const handleOndrop = (event) => {
		//prevent the browser from opening the image
		event.preventDefault();
		event.stopPropagation();
		//let's grab the image file
		let imageFile = event.dataTransfer.files[0];
		handleFile(imageFile);
	};

	console.log("img", image);

	return (
		<div className="wrapper">
			<div
				className="drop_zone"
				onDragOver={handleOndragOver}
				onDrop={handleOndrop}
				onClick={() => fileInput.current.click()}
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
						d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
					/>
				</svg>
				<p>Drag and drop image here....</p>
				<input
					type="file"
					accept="image/*"
					ref={fileInput}
					hidden
					//onChange={handleFile}
					onChange={(e) => handleFile(e.target.files[0])}
				/>
			</div>
			<section className="img-list-section">
				{image.map((img, idx) => {
					return (
						<div key={idx} className="preview-image">
							<img src={img.url} alt="image-url" />
							<div className="img-delete">
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
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};
