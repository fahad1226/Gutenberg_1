import { RichText } from "@wordpress/block-editor";

const SecondBlock = ({ attributes, setAttributes }) => {
    const handleChange = (newContent) => {
        console.log(attributes);
        setAttributes({ secondDescription: newContent});
    }
	return (
		<div>
			<RichText
				tagName="p"
				placeholder="give me someting"
				value={attributes.secondDescription}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SecondBlock;
