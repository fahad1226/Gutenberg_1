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
	ColorPalette,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	RichText,
} from "@wordpress/block-editor";
import {
	IconButton,
	PanelBody,
	PanelRow,
	RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
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
	const handleTitleColorChange = (newColor) => {
		setAttributes({ titleColor: newColor });
	};

	const handleDescpColorChange = (newColor) => {
		setAttributes({ descriptionColor: newColor });
	};

	const handleSelectedImage = (neweImage) => {
		console.log(neweImage.sizes.full.url);
		setAttributes({ backgroundImage: neweImage.sizes.full.url });
	};

	const handleoverlayColorChange = (newColor) => {
		setAttributes({ overlayColor: newColor });
	};

	const handleoverlayOpacityChange = (newOpacity) => {
		setAttributes({ overlayOpacity: newOpacity });
	};

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
				<PanelBody title={"Font color setting"}>
					<PanelRow>My Panel Inputs and Labels</PanelRow>
					<p>
						<strong>select a title color: </strong>
					</p>
					<ColorPalette
						value={attributes.titleColor}
						onChange={handleTitleColorChange}
					/>
					<p>
						<strong>select a description color: </strong>
					</p>
					<ColorPalette
						value={attributes.descriptionColor}
						onChange={handleDescpColorChange}
					/>
				</PanelBody>

				<PanelBody title={"Background image setting"}>
					<p>
						<strong>select a background image: </strong>
					</p>

					<MediaUpload
						onSelect={handleSelectedImage}
						type="image"
						value={attributes.backgroundImage}
						render={({ open }) => (
							<IconButton
								onClick={open}
								icon="upload"
								className="editor-media-placeholder__button is-button is-default is-large"
							>
								Background Image
							</IconButton>
						)}
					/>

					<div style={{ marginTop: "40px", marginBottom: "40px" }}>
						<p>
							<strong>overlay color setting:</strong>
						</p>

						<ColorPalette
							value={attributes.overlayColor}
							onChange={handleoverlayColorChange}
						/>
						<RangeControl
							label="Columns"
							value={attributes.overlayOpacity}
							onChange={handleoverlayOpacityChange}
							min={0}
							max={1}
							step={0.01}
						/>
					</div>
				</PanelBody>
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
			</div>
		</div>
	);
}
