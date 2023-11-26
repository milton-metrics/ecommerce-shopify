
import { Product } from '@/framework/common/types/product';
import { FunctionComponent } from 'react';
import Link from "next/link"
import Image from "next/image"

interface Props {
    product: Product
}

const placeholderImage = '/product-image-placeholder.svg'
const ProductCard: FunctionComponent<Props> = ({product}) => {

    return (
      <Link legacyBehavior href={`/products/${product.slug}`}>
        <a>            
          <div>
            <h3>
              <span>{product.name}</span>
            </h3>
            <span>14 $</span>
          </div>
          {
            product.images && product.images.length > 0 && (
              <Image
                src={placeholderImage}
                alt={product.name ?? "Product Image"}
                width={540}
                height={540}
                quality={85}
                layout="responsive"
              />
            )
          }
        </a>
      </Link>
    )

}

export default ProductCard;