import { RichText } from "@wordpress/block-editor";
import "./style.scss";

export default function save({ className, attributes }) {
	const { title, info } = attributes;
	return (
		<div className="wp-block-fahad-blocks-team-member">
			{title && (
				<RichText.Content
					className={"wp-block-fahad-blocks-team-member__title"}
					tagName="h4"
					value={title}
				/>
			)}
			{info && (
				<RichText.Content
					className={"wp-block-fahad-blocks-team-member__info"}
					tagName="p"
					value={info}
				/>
			)}
		</div>
	);
}
