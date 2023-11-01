import fetchApi from "../utils/queries/fetch-api"

import getAllProductsQuery from "../utils/queries/get-all-products"

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi({query: getAllProductsQuery})
    return products.data
}

export default getAllProducts