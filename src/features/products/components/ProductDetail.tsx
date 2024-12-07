import { Product } from '../types/product'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>가격: {product.price}원</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  )
} 