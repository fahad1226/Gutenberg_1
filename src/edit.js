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
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import {
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import Hello from "./components/Hello";
import TopBar from "./components/Sidebar/TopBar";
import "./editor.scss";
import "./style.scss";

const ALLOWED_BUTTON = ["core/button"];

const MY_TERMPLATE = [
	["core/image", {}],
	["core/heading", { placeholder: "give the title" }],
	["core/paragraph", { placeholder: "give the description" }],
	["core/button", { placeholder: "Call to action" }],
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ className, attributes, setAttributes }) {
	const handleAlignmentChange = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const mystyle = {
		color: "white",
		backgroundColor: "DodgerBlue",
		padding: "10px",
		fontFamily: "Arial",
		height: "100px",
	};

	return (
		<div>
			<InspectorControls style={{ marginBottom: "40px" }}>
				<TopBar attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>

			<div
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
				{/* <InnerBlocks template={MY_TERMPLATE} templateLock="insert" /> */}

				<BlockControls>
					<AlignmentToolbar
						value={attributes.alignment}
						onChange={handleAlignmentChange}
					/>
				</BlockControls>

				<BlockControls
					controls={[
						[
							{
								icon: "wordpress",
								title: __("test", "mytheme-blocks"),
								onClick: () => alert(true),
								isActive: false,
							},
						],
						[
							{
								icon: "wordpress",
								title: __("test", "mytheme-blocks"),
								onClick: () => alert(true),
								isActive: false,
							},
						],
					]}
				/>

				<div className="container wp-box">
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
				<div>
					<Hello />
				</div>
			</div>
		</div>
	);
}
