
import { Product } from '@/framework/common/types/product';
import { FunctionComponent } from 'react';

interface Props {
    product: Product
}

const ProductCard: FunctionComponent<Props> = ({product}) => {

    return (
        <div>
            {product.name}
        </div>
    )

}

export default ProductCard;