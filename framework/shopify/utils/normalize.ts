import { ImageEdge, Product as ShopifyProduct } from "@/framework/schema";

const normalizeProductImages = ({edges}: {edges : ImageEdge[]}) => 
    edges.map(({node: {originalSrc: url, ...rest}}) => ({
            url: `/images/${url}`,
            ...rest }
    ))


export function normalizeProduct(productNode : ShopifyProduct): any {
    const {
        id,
        title: name, 
        handle,
        vendor,
        description,
        images: imageCollection,
        ...rest
    } = productNode

    const product = {
        id, 
        name,
        vendor,
        description,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g, ""),
        images: normalizeProductImages(imageCollection),
        ...rest
    }

    return product
}