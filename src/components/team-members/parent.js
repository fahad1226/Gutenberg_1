import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const attributes = {
	columns: {
		type: "number",
		default: 2,
	},
};

registerBlockType("create-block/team-members", {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("Team Members", "team-members"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __("Block showing list of team members", "team-members"),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: "common",

	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	keywords: [
		__("team", "team-members"),
		__("person", "team-members"),
		__("member", "team-members"),
	],

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: "grid-view",

	attributes,

	edit({ className, attributes, setAttributes }) {
		const { columns } = attributes;
		return (
			<div
				className={`wp-block-fahad-blocks-team-members has-${columns}-columns`}
			>
				<InspectorControls style={{ marginBottom: "40px" }}>
					<PanelBody title="My Block Settings">
						<RangeControl
							label={__("Columns")}
							value={columns}
							onChange={(columns) => setAttributes({ columns })}
							min={1}
							max={6}
						/>
					</PanelBody>
				</InspectorControls>

				<InnerBlocks
					allowedBlocks={["create-block/team-member"]}
					template={[["create-block/team-member"]]}
					//templateLock="insert"
				/>
			</div>
		);
	},

	/**
	 * @see ./save.js
	 */
	save({ className, attributes }) {
		const { columns } = attributes;
		return (
			<div
				className={`wp-block-fahad-blocks-team-members has-${columns}-columns`}
			>
				<InnerBlocks.Content />
			</div>
		);
	},
});
