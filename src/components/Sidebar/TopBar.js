import {
	ColorPalette,
	MediaUpload,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	IconButton,
	PanelBody,
	PanelRow,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const TopBar = ({ attributes, setAttributes }) => {
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

	const handleBackgroundColorChange = (newBgColor) => {
		setAttributes({ backgroundColor: newBgColor });
	};

	const handleTextColorChange = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
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

			<div>
				<PanelBody title="Check The Box">
					<ToggleControl
						label="Fixed Background"
						onChange={(v) => console.log(v)}
					/>
				</PanelBody>
				<PanelBody title={__("select the background color: ")}>
					<PanelColorSettings
						title={__("Color Panel")}
						colorSettings={[
							{
								value: attributes.backgroundColor,
								onChange: handleBackgroundColorChange,
								label: __("background Color", "fahad-block"),
								colors: [
									{ color: "black" },
									{ color: "white" },
									{ color: "blue" },
								],
							},
							{
								value: attributes.textColor,
								onChange: handleTextColorChange,
								label: __("text Color", "fahad-block"),
								colors: [
									{ color: "black" },
									{ color: "green" },
									{ color: "blue" },
								],
							},
						]}
					/>
					{/* <ColorPalette
						colors={[{ color: "black" }, { color: "white" }, { color: "blue" }]}
						onChange={handleBackgroundColorChange}
					/> */}
				</PanelBody>
				{/* <PanelBody title={__("selecet the text color: ")}>
					<ColorPalette
						colors={[{ color: "black" }, { color: "white" }, { color: "blue" }]}
						onChange={handleTextColorChange}
					/>
				</PanelBody> */}
			</div>
		</div>
	);
};

export default TopBar;
