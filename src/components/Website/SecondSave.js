import { RichText } from "@wordpress/block-editor";
import "../../style.scss";

const SecondSave = ({ attributes, setAttributes }) => {
	const { backgroundColor, textColor } = attributes;
	return (
		<div className="container">
			<RichText.Content
				tagName="p"
				value={attributes.secondDescription}
				style={{
					textAlign: attributes.alignment,
					backgroundColor: backgroundColor,
					color: textColor,
				}}
			/>
		</div>
	);
};

export default SecondSave;
