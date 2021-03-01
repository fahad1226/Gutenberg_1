import { MediaPlaceholder, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./style.scss";

function Edit({ className, attributes, setAttributes }) {
	const { title, info } = attributes;

	const handleTitleChange = (title) => {
		setAttributes({ title });
	};
	const handleInfoChange = (info) => {
		setAttributes({ info });
	};
	return (
		<div className="wp-block-fahad-blocks-team-member">
			<MediaPlaceholder
				icon="format-image"
				onSelect={(image) => console.log(image)}
				onSelectURL={(url) => console.log(url)}
				onError={(error) => console.log(error)}
				accept="image/*"
				allowedTypes={["image"]}
			/>
			<RichText
				className={"wp-block-fahad-blocks-team-member__title"}
				tagName="h4"
				value={title}
				onChange={handleTitleChange}
				placeholder={__("member name", "team-member")}
				allowedFormats={["core/bold"]}
			/>
			<RichText
				className={"wp-block-fahad-blocks-team-member__info"}
				tagName="p"
				value={info}
				onChange={handleInfoChange}
				placeholder={__("member info", "team-member")}
				allowedFormats={["core/bold"]}
			/>
		</div>
	);
}

export default Edit;
