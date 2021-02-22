import { BlockControls, RichText } from "@wordpress/block-editor";
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
	} = attributes;

	const handleChange = (newContent) => {
		console.log(attributes);
		setAttributes({ secondDescription: newContent });
	};
	const hanldeAlignmentChange = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	const handleTitleChange = (newTitle) => {
		console.log("Hello title");
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

			<div>
				<RichText
					tagname="p"
					placeholder="Title"
					value={attributes.title}
					onChange={handleTitleChange}
					allowedFormats={["core/bold"]}
					style={{
						width: "900px",
						textAlign: alignment,
						backgroundColor: titleColor,
						color: textColor,
					}}
				/> <button className="inline-block">+</button>
				<RichText
					tagName="p"
					value={secondDescription}
					onChange={handleChange}
					allowedFormats={["core/bold"]}
					
					style={{
						width: "900px",
						marginTop: "2px",
						paddingBottom: "45px",
						paddingTop: "45px",
						//marginBottom: "70px",
						textAlign: alignment,
						backgroundColor: backgroundColor,
						color: textColor,
					}}
				/>
				
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
