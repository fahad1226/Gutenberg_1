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
import { RichText } from "@wordpress/block-editor";
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
export default function save({ attributes, setAttributes }) {
	return (
		<div className="container">
			{/* <div
					style={{ backgroundColor: titleColor, width: "900px" }}
					onClick={() =>
						setAttributes({ toggleDescription: !toggleDescription })
					}
				> */}
			<RichText.Content
				tagname="p"
				value={attributes.title}
				onClick={() => setAttributes({ toggleDescription: !toggleDescription })}
				style={{
					paddingLeft: "10px",
					paddingBottom: "10px",
					paddingTop: "10px",
					backgroundColor: attributes.titleColor,
					width: "900px",
					textAlign: attributes.alignment,
					color: attributes.textColor,
				}}
			/>

			<RichText.Content
				tagName="p"
				value={attributes.secondDescription}
				style={{
					width: "900px",
					paddingLeft: "10px",
					marginTop: "2px",
					paddingBottom: "45px",
					paddingTop: "45px",
					//marginBottom: "70px",
					textAlign: attributes.alignment,
					backgroundColor: attributes.backgroundColor,
					color: attributes.textColor,
					minHeight: "200px",
				}}
			/>

			{/* <FirstSave attributes={props.attributes} /> */}
			{/* <SecondSave attributes={attributes} /> */}
		</div>
	);
}
