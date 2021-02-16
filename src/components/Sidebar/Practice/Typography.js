import { Panel, PanelBody, PanelRow } from "@wordpress/components";

const Typography = ({ attributes, setAttributes }) => {
	return (
		<div>
			<Panel header="Typography">
				<PanelBody title="Typography" icon="dashicons-plus" initialOpen={true}>
					<PanelRow>My Panel Inputs and Labels</PanelRow>
				</PanelBody>
			</Panel>
		</div>
	);
};

export default Typography;
