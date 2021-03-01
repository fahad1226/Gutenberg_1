import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import "./editor.scss";
import "./parent";
import save from "./save";

const attributes = {
	title: {
		type: "string",
		source: "html",
		selector: "h4",
	},
	info: {
		type: "string",
		source: "html",
		selector: "p",
	},
};

registerBlockType("create-block/team-member", {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	parent: ["create-block/team-members"],

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __("Team Member", "team-member"),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __("Block shwoing a team member", "team-member"),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
	 */
	category: "common",

	keywords: [
		__("team", "team-member"),
		__("person", "team-member"),
		__("member", "team-member"),
	],

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: "admin-users",

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		reusable: false,
		html: false,
	},

	attributes,

	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
