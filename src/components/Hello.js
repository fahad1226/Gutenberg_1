import { BlockControls } from "@wordpress/block-editor";

const Hello = () => {
	return (
		<div>
			<h1>this just an example text from components directory</h1>

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
		</div>
	);
};

export default Hello;
