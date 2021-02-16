import { InnerBlocks, RichText } from "@wordpress/block-editor";

const FirstSave = ({ attributes, setAttributes}) => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${attributes.backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					opacity: `${attributes.overlayOpacity}`,
					backgroundColor: `${attributes.overlayColor}`,
				}}
			>
				{/* <InnerBlocks.Content /> */}
				<div className="container">
					<RichText.Content
						tagName="h2"
						value={attributes.title}
						style={{ color: attributes.titleColor }}
					/>

					<RichText.Content
						tagName="p"
						value={attributes.description}
						style={{ color: attributes.descriptionColor }}
					/>
					<InnerBlocks.Content />
				</div>
				<h1 className="fahad">hello fahad bin munir</h1>
			</div>
		</div>
	);
};

export default FirstSave;
