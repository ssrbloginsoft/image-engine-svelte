<script lang="ts">
	import { useImageEngineContext, generateSrcSetString } from '../utils';
	import type { TSourceProps } from '../types';

	export let srcSet: TSourceProps['srcSet'];

	const props = $$props;
	const { deliveryAddress, stripFromSrc } = useImageEngineContext();

	const srcSetString = generateSrcSetString(
		stripFromSrc
			? srcSet.map((image) => ({
					...image,
					src: image.src.replace(stripFromSrc, '')
			  }))
			: srcSet,
		deliveryAddress
	);
</script>

<source {...props} srcSet={srcSetString} />
