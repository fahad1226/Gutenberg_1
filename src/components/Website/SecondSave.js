import { RichText } from "@wordpress/block-editor";
import "../../style.scss";

const SecondSave = ({ attributes, setAttributes }) => {
	return (
		<div>
			<div>
				{/* <InnerBlocks.Content /> */}
				<div className="container">
					<RichText.Content
						tagName="p"
						value={attributes.secondDescription}
						style={{ textAlign: attributes.alignment }}
					/>
				</div>
			</div>
		</div>
	);
};

export default SecondSave;
