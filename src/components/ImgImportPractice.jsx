import React from "react";
import IMAGES from "../assets/Images/ImageIndex";

function ImgImportPractice() {
	return (
		<div>
			<h1>IMAGE IMPORTS IN REACT</h1>
			{/* FROM PUBLIC DIRECTORY */}
			<h2> FROM PUBLIC DIRECTORY </h2>
			<img src="/img2.jpg" alt="My Image" width={200} />
			<br />

			{/* FROM SRC DIRECTORY */}
			<h2> FROM SRC DIRECTORY </h2>
			<img src={IMAGES.img1} alt="img" width={200} />
			<img src={IMAGES.img2} alt="img" width={200} />
			<img src={IMAGES.img3} alt="img" width={200} />
			<img src={IMAGES.img4} alt="img" width={200} />
			<br />

			{/* DYNAMIC IMPORTING */}
			<h2> DYNAMIC IMPORT FROM SRC DIRECTORY </h2>
			{Object.values(IMAGES).map((img, index) => {
				return <img key={index} src={img} alt="img" width={200} />;
			})}
		</div>
	);
}

export default ImgImportPractice;
