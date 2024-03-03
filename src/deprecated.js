import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'

const v1 = {
	save() {
		return (
			<div {...useBlockProps.save()}>
				<p>{__('This is a text', 'deprecated-block')}</p>
			</div>
		);
	}
}

const v2 ={
	save() {
		return (
			<div { ...useBlockProps.save()}>
				<p>{__('This is a another text', 'deprecated-block')}</p>
			</div>
		);
	}
}

const v3 = {
	"attributes": {
		"para": {
			"type": "string",
			"default": "This is a RichText paragraph"
		}
	},
	save({ attributes }) {
		return (
			<div { ...useBlockProps.save()}>
				<p>
				<RichText.Content
					tagName="p"
					value={attributes.para}
				/>
				</p>
			</div>
		);
	}

}
export default [ v3, v2, v1 ];
