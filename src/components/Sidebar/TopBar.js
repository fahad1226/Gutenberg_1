import { ColorPalette, MediaUpload } from "@wordpress/block-editor";
import {
	IconButton,
	PanelBody,
	PanelRow,
	RangeControl,
} from "@wordpress/components";

const TopBar = ({attributes, setAttributes}) => {
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
	return (
		<div>
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
		</div>
	);
};

export default TopBar;
