/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks, RichText } from "@wordpress/block-editor";
import "./style.scss";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	return (
		<div
			style={{
				backgroundImage: `url(${props.attributes.backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				opacity: `${props.attributes.overlayOpacity}`,
				backgroundColor: `${props.attributes.overlayColor}`,
			}}
		>
			{/* <InnerBlocks.Content /> */}
			<div className="container">
				<RichText.Content
					tagName="h2"
					value={props.attributes.title}
					style={{ color: props.attributes.titleColor }}
				/>

				<RichText.Content
					tagName="p"
					value={props.attributes.description}
					style={{ color: props.attributes.descriptionColor }}
				/>
				<InnerBlocks.Content />
			</div>
			<h1 className="fahad">hello fahad bin munir</h1>
		</div>
	);
}
