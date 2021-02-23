import { RichText } from "@wordpress/block-editor";
import "../../style.scss";

const SecondSave = ({ attributes, setAttributes }) => {
	const {
		alignment,
		titleColor,
		textColor,
		backgroundColor,
		secondDescription,
		title,
	} = attributes;
	return (
		<div className="hello">
			{/* <div
					style={{ backgroundColor: titleColor, width: "900px" }}
					onClick={() =>
						setAttributes({ toggleDescription: !toggleDescription })
					}
				> */}
			<RichText.Content
				tagname="p"
				value={title}
				style={{
					paddingLeft: "10px",
					paddingBottom: "10px",
					paddingTop: "10px",
					backgroundColor: titleColor,
					width: "900px",
					textAlign: alignment,
					color: textColor,
				}}
			/>

			<RichText.Content
				tagName="p"
				value={secondDescription}
				style={{
					width: "900px",
					paddingLeft: "10px",
					marginTop: "2px",
					paddingBottom: "45px",
					paddingTop: "45px",
					//marginBottom: "70px",
					textAlign: alignment,
					backgroundColor: backgroundColor,
					color: textColor,
					minHeight: "200px",
				}}
			/>
		</div>
	);
};

export default SecondSave;
