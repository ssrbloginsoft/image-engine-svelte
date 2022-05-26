# Svelte components for ImageEngine integration-BetaNotTested

Hassle-free way to deliver optimized responsive images in your Svelte applications.

## Quick start

The package includes four components:

* `ImageEngineProvider`
* `Image`
* `Picture`
* `Source`

To start using provided image tags in your application, place `ImageEngineProvider` somewhere above them in the DOM tree with the `deliveryAddress` prop set to your [ImageEngine Delivery Address](https://support.imageengine.io/hc/en-us/articles/360059238371-Quick-Start):

```jsx
<script>
 import { ImageEngineProvider } from 'image-engine-svelte';
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<ImageEngineProvider
    deliveryAddress="https://blazing-fast-pics.cdn.imgeng.in"
    // or, for local development:
    // deliveryAddress="http://localhost:9009"
>
    <ShoppingCart />
    ...
</ImageEngineProvider>
```

```jsx
<script>
 import { Image } from 'image-engine-svelte';
</script>

<section>
    <Image
        src="pick-ups/custom/unstoppable.jpg"
        srcSet={...}
        sizes={...}
        directives={...}
        {...otherProps}
    />
</section>
```

<!-- [Demo app on CodeSandbox](https://codesandbox.io/s/3lz2y?file=/src/App.tsx) -->

## Component props reference

### ImageEngineProvider

`deliveryAddress` - [ImageEngine Delivery Address](https://support.imageengine.io/hc/en-us/articles/360059238371-Quick-Start):

```ts
deliveryAddress: string
```

`stripFromSrc` - Strip away a portion of a source string in all ImageEngine's components. Particularly useful if your images are coming from a headless CMS and you need to erase something in received URL path (origin, for example):

```ts
stripFromSrc?: string
```

### Image

`src` - Relative path to the image:

```ts
src: string
```

`directives` - ImageEngine directives:

```ts
directives?: {
  // Define desired width.
  width?: number
  // Set width to auto (with fallback).
  autoWidthWithFallback?: number
  // Define desired height.
  height?: number
  // Adjust compression.
  // Possible range: 0-100.
  compression?: number
  // Define desired output format.
  outputFormat?:
    | "png"
    | "gif"
    | "jpg"
    | "bmp"
    | "webp"
    | "jp2"
    | "svg"
    | "mp4"
    | "jxr"
  // Define desired fit method.
  fitMethod?: "stretch" | "box" | "letterbox" | "cropbox"
  // Don't apply any optimizations to the origin image.
  noOptimization?: true
  // Adjust sharpness.
  // Possible range: 0-100.
  sharpness?: number
  // Define rotation.
  // Possible range: -360 to 360.
  rotate?: number
  // Use WURFL to calculate screen's width and then scale the image accordingly.
  // Possible range: 0-100 (float).
  scaleToScreenWidth?: number
  // Crop the image [width, height, left, top].
  crop?: number[]
  // Convert the image into a data url.
  inline?: true
  // Keep EXIF data.
  keepMeta?: true
}
```

`srcSet` - List of image variations for the image source set:

```ts
srcSet?: [{
  // Relative path to the image.
  src: string
  // Width descriptor.
  width: string
  // Custom optimization instructions.
  directives?: TDirectives
}]
```

### Source

`srcSet` - List of image variations for the image source set:

```ts
srcSet?: [{
  // Relative path to the image.
  src: string
  // Width descriptor.
  width: string
  directives?: TDirectives
}]
```

## Development

All the components were written inside ` src/lib `.
For more information about package development click on the below link.
[Documentation for package development](https://kit.svelte.dev/docs/packaging)

### Generation of package

In the root of the project folder run

>` npx svelte-kit package `

OR

> ` svelte-kit package ` (If it is globally installed)

to prepare the package for publishing.

### Publishing the package

Package directory will be created when above command was executed and run the following commands to publish package:

> ` cd package `
>
> ` npm publish `

Above command will publish the package to npm repository.
