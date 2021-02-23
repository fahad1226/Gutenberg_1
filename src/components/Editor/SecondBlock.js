import {
	BlockControls,
	RichText
} from "@wordpress/block-editor";
import { DropdownMenu, Toolbar, ToolbarButton } from "@wordpress/components";
import {
	arrowDown,
	arrowLeft,
	arrowRight,
	arrowUp,
	formatBold,
	formatItalic,
	link,
	more,
} from "@wordpress/icons";
import "../../editor.scss";

const SecondBlock = ({ attributes, setAttributes }) => {
	const {
		alignment,
		titleColor,
		textColor,
		backgroundColor,
		secondDescription,
		toggleDescription,
	} = attributes;

	const handleDescriptionChange = (secondDescription) => {
		console.log('desc chabges');
		setAttributes({ secondDescription });
	};
	const hanldeAlignmentChange = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const handleTitleChange = (newTitle) => {
		console.log('title changes');
		setAttributes({ title: newTitle });
	};

	return (
		<div>
			<BlockControls
			// controls={[
			// 	[
			// 		{
			// 			icon: "wordpress",
			// 			title: "test/my-theme-block",
			// 			onClick: () => alert("Hello"),
			// 			isActive: false,
			// 		},
			// 	],
			// 	[
			// 		{
			// 			icon: "wordpress",
			// 			title: "test/my-theme-block",
			// 			onClick: () => alert("Hello"),
			// 			isActive: false,
			// 		},
			// 	],
			// ]}
			>
				{/* <AlignmentToolbar
					onChange={ hanldeAlignmentChange }
				/> */}

				{attributes.secondDescription &&
					attributes.secondDescription.length > 0 && (
						<Toolbar>
							<ToolbarButton icon={formatBold} label="Bold" />
							<ToolbarButton icon={formatItalic} label="Italic" />
							<ToolbarButton icon={link} label="Link" />

							<DropdownMenu
								icon={more}
								label="Select a direction"
								controls={[
									{
										title: "Up",
										icon: arrowUp,
										onClick: () => hanldeAlignmentChange("up"),
									},
									{
										title: "Right",
										icon: arrowRight,
										onClick: () => hanldeAlignmentChange("right"),
									},
									{
										title: "Down",
										icon: arrowDown,
										onClick: () => hanldeAlignmentChange("down"),
									},
									{
										title: "Left",
										icon: arrowLeft,
										onClick: () => hanldeAlignmentChange("left"),
									},
								]}
							/>
						</Toolbar>
					)}
			</BlockControls>

			<div  className="hello">
				{/* <div
					style={{ backgroundColor: titleColor, width: "900px" }}
					onClick={() =>
						setAttributes({ toggleDescription: !toggleDescription })
					}
				> */}
				<RichText
					tagname="p"
					placeholder="Title"
					value={attributes.title}
					onChange={handleTitleChange}
					allowedFormats={["core/bold"]}
					onClick={() =>
						setAttributes({ toggleDescription: !toggleDescription })
					}
					style={{
						paddingLeft: "10px",
						paddingBottom: "10px",
						paddingTop: "10px",
						backgroundColor: titleColor,
						width: "900px",
						textAlign: alignment,
						color: textColor,
					}}
				/>
				{/* </div> */}
				{toggleDescription && (
					<div style={{ marginBottom: "0px" }}>
						<RichText
							tagName="p"
							value={secondDescription}
							onChange={handleDescriptionChange}
							allowedFormats={["core/bold"]}
							style={{
								width: "900px",
								paddingLeft: "10px",
								marginTop: "2px",
								paddingBottom: "45px",
								paddingTop: "45px",
								//marginBottom: "70px",
								textAlign: alignment,
								backgroundColor: backgroundColor,
								color: textColor,
								minHeight: "200px",
							}}
						/>
					</div>
				)}
			</div>

			{/* <div className="hello">
				<p>
					Hell Fahad Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Officiis molestias velit modi eos necessitatibus incidunt minima
					voluptas, nemo rerum exercitationem.
				</p>
			</div> */}
		</div>
	);
};

export default SecondBlock;
