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
	const { alignment, backgroundColor, textColor } = attributes;

	const handleChange = (newContent) => {
		console.log(attributes);
		setAttributes({ secondDescription: newContent });
	};
	const hanldeAlignmentChange = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
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
					tagName="p"
					placeholder="give me someting"
					value={attributes.secondDescription}
					onChange={handleChange}
					allowedFormats={["core/bold"]}
					style={{
						marginLeft: "50px",
						width: "900px",
						height: "200px",
						textAlign: alignment,
						backgroundColor: backgroundColor,
					}}
				/>
			</div>
		</div>
	);
};

export default SecondBlock;
