import type { IEDirectives } from "@imageengine/imageengine-helpers";
import type { SvelteComponentTyped } from "svelte/internal";

export type TSrcSet = Array<{
    // Relative path to the image.
    src: string
    // Width descriptor.
    width: string
    directives?: IEDirectives
}>

export type TImageProps = Omit<HTMLImageElement, "src" | "srcSet"> & {
    src: string
    directives?: IEDirectives | null
    srcSet?: TSrcSet | null
}

export type TSourceProps = Omit<HTMLSourceElement, "srcSet"> & {
    srcSet: TSrcSet
}

export type TPictureProps = Omit<HTMLSourceElement, "children"> & {
    children: [...Array<SvelteComponentTyped<TImageProps>>, SvelteComponentTyped<TImageProps>]
}

export type TImageEngineProvider = { deliveryAddress: string, stripFromSrc: string | null }
