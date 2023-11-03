import fetchApi from "../utils/queries/fetch-api"

import getAllProductsQuery from "../utils/queries/get-all-products"
import { ProductConnection } from "@/framework/schema"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery})
    return data.products
}

export default getAllProducts