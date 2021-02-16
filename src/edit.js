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
	InspectorControls,
} from "@wordpress/block-editor";
import FirstBlock from "./components/Editor/FirstBlock";
import SecondBlock from "./components/Editor/SecondBlock";
import Typography from "./components/Sidebar/Practice/Typography";
import TopBar from "./components/Sidebar/TopBar";
import "./editor.scss";
import "./style.scss";

// const MY_TERMPLATE = [
// 	["core/image", {}],
// 	["core/heading", { placeholder: "give the title" }],
// 	["core/paragraph", { placeholder: "give the description" }],
// 	["core/button", { placeholder: "Call to action" }],
// ];

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

			<InspectorControls>
				<Typography attributes={attributes} setAttributes={setAttributes} />
			</InspectorControls>

			<div>
				<BlockControls>
					<AlignmentToolbar
						value={attributes.alignment}
						onChange={handleAlignmentChange}
					/>
				</BlockControls>

				{/* <FirstBlock attributes={attributes} setAttributes={setAttributes} /> */}
				<SecondBlock attributes={attributes} setAttributes={setAttributes} />

				{/* <div>
					<Hello />
				</div> */}
			</div>
		</div>
	);
}
