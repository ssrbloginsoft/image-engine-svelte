<script lang="ts">
	import { useImageEngineContext } from '../utils/index';
	import { constructUrl, generateSrcSetString } from '../utils';
	import type { TImageProps } from '../types';

	import type { IEFormat } from '@imageengine/imageengine-helpers';

	const ALLOWED_INPUT_EXTENSIONS: IEFormat[] = [
		'png',
		'gif',
		'jpg',
		'jpeg',
		'bmp',
		'webp',
		'jp2',
		'svg'
	];

	export let src: TImageProps['src'];
	export let directives: TImageProps['directives'] = null;
	export let srcSet: TImageProps['srcSet'] = null;

	if (!src) {
		throw new Error(`Please ensure that the image component has an 'src' prop.`);
	}

	const props = $$props;
	const { deliveryAddress, stripFromSrc } = useImageEngineContext();
	const imageUrl = deliveryAddress + (stripFromSrc ? src.replace(stripFromSrc, '') : src);
	const [imageExtension] = src.split('.').slice(-1);

	if (!ALLOWED_INPUT_EXTENSIONS.includes(imageExtension.toLowerCase() as IEFormat)) {
		console.warn(
			`The following image's extension doesn't match any of the allowed types and won't be optimized: ${src}.`,
			`List of supported extensions: ${ALLOWED_INPUT_EXTENSIONS.join(', ')}.`
		);
	}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
	{...props}
	src={directives ? constructUrl(imageUrl, directives) : imageUrl}
	srcSet={srcSet && generateSrcSetString(srcSet, deliveryAddress)}
/>
