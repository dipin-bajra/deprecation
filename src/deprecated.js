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


export default  [ v1 ];
