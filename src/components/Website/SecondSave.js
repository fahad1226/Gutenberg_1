import { RichText } from "@wordpress/block-editor";

const SecondSave = ({ attributes, setAttributes }) => {
	return (
		<div>
			<div>
				{/* <InnerBlocks.Content /> */}
				<div className="container">
					<RichText.Content tagName="p" value={attributes.secondDescription} />
				</div>
			</div>
		</div>
	);
};

export default SecondSave;
