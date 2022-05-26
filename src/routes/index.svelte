<script lang="ts">
	import { ImageEngineProvider, Image, Picture, Source } from '../lib';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ImageEngineProvider deliveryAddress="https://blazing-fast-pics.cdn.imgeng.in">
	<Image
		src="/images/pic_2.jpg"
		directives={{
			outputFormat: 'webp',
			rotate: 45,
			inline: true,
			width: 100
		}}
	/>
	<Picture>
		<Source
			srcSet={[
				{
					src: '/images/pic_2.jpg',
					directives: {
						outputFormat: 'webp',
						rotate: 45,
						inline: true,
						width: 100
					},
					width: '100'
				},
				{
					src: '/images/pic_2.jpg',
					directives: {
						outputFormat: 'webp',
						rotate: 90,
						inline: true,
						width: 100
					},
					width: '200'
				}
			]}
		/>
		<Image
			src="/images/pic_2.jpg"
			directives={{
				outputFormat: 'webp',
				rotate: 45,
				inline: true,
				width: 100
			}}
		/>
	</Picture>
</ImageEngineProvider>
