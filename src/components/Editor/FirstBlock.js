import { InnerBlocks, RichText } from "@wordpress/block-editor";
const ALLOWED_BUTTON = ["core/button"];

const FirstBlock = ({ attributes, setAttributes }) => {
	return (
		<div>
			<div className="container wp-box"
				style={{
					backgroundImage: `url(${attributes.backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					opacity: `${attributes.overlayOpacity}`,
					backgroundColor: `${attributes.overlayColor}`,
					width: "50%",
					height: "50%",
				}}
			>
				<RichText
					tagName="h4"
					placeholder="the title"
					value={attributes.title}
					onChange={(title) => setAttributes({ title })}
					style={{
						color: attributes.titleColor,
						textAlign: attributes.alignment,
					}}
				/>

				<RichText
					tagName="p"
					placeholder="give the deccription"
					value={attributes.description}
					onChange={(description) => setAttributes({ description })}
					style={{ color: attributes.descriptionColor }}
				/>

				<InnerBlocks allowedBlocks={ALLOWED_BUTTON} />
			</div>
		</div>
	);
};

export default FirstBlock;
