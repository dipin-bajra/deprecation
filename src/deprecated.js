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

const v4 ={

	"attributes": {
		"para": {
			"type": "string",
			"default": "This is a RichText paragraph"
		},
		"newText": {
			"type": "string",
			"default": "This is a new text added."
		}
	},

	migrate( { para, newText } ) {
		return {
			para:para,
			changedText: newText,
		};
	},
	save ({ attributes }) {
		return (
			<div {...useBlockProps.save()}>
				<div>
					<p>
						<RichText.Content
							tagName="p"
							value={attributes.para}
						/>
					</p>
					<p>{attributes.newText}</p>
				</div>

			</div>
		)
	}
}
export default [v4, v3, v2, v1 ];
