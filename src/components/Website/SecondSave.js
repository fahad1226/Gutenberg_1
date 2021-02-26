import { RichText } from "@wordpress/block-editor";
import "../../style.scss";

const SecondSave = ({ attributes, setAttributes }) => {
	const {
		alignment,
		titleColor,
		textColor,
		backgroundColor,
		secondDescription,
		toggleDescription,
		title,
	} = attributes;
	return (
		<div>
			<RichText.Content
				tagName="p"
				value={title}
				style={{
					backgroundColor: titleColor,
					color: "black",
					width: "900px",
					minHeight: "30px",
					paddingLeft: "10px",
					paddingBottom: "10px",
					paddingTop: "10px",
				}}
			/>

			<RichText.Content
				tagName="p"
				value={secondDescription}
				style={{
					backgroundColor: backgroundColor,
					color: "black",
					width: "900px",
					marginBottom: "40px",
					paddingLeft: "10px",
					marginTop: "2px",
					paddingBottom: "45px",
					paddingTop: "45px",
					minHeight: "200px",
				}}
			/>
		</div>
	);
};

export default SecondSave;
