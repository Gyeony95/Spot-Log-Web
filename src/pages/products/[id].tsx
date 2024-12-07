import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../../stores/products'
import { ProductDetail } from '../../features/products/components/ProductDetail.tsx'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { fetchProductById, selectedProduct, loading } = useProductStore()

  useEffect(() => {
    if (id) fetchProductById(Number(id))
  }, [id, fetchProductById])

  if (loading) return <div>Loading...</div>
  if (!selectedProduct) return <div>상품을 찾을 수 없습니다.</div>

  return (
    <div className="container mx-auto px-4">
      <ProductDetail product={selectedProduct} />
    </div>
  )
} 