import { ApiConfig } from "@/framework/common/types/api"
import {
    normalizeProduct,
    getAllProductsQuery
} from "../utils"

import { ProductConnection } from "@/framework/schema"
import { Product } from "@common/types/product"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
    const { data } = await config.fetch<ReturnType>({url: config.apiUrl, query: getAllProductsQuery})

    const products = data.products.edges.map(({ node : product }) => 
        normalizeProduct(product)
    ) ?? []

    return products
}

export default getAllProducts