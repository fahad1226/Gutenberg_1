import { RichText } from "@wordpress/block-editor"

const SecondBlock = ({ attributes, setAttributes }) => {
    console.log(attributes.secondDescription);
	return (
		<div>
			<RichText 
                tagName="p"
                placeholder="give me someting"
                value={attributes.secondDescription}
                onChange={(secondDescription) => setAttributes({ secondDescription })}
            />
		</div>
	);
};

export default SecondBlock;
