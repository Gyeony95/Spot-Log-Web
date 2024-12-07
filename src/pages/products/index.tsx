import { useEffect } from 'react'
import { useProductStore } from '../../stores/products'
import { ProductList } from '../../features/products/components/ProductList'
import { ProductFilter } from '../../features/products/components/ProductFilter'

export default function ProductsPage() {
  const { fetchProducts, loading } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (loading) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">상품 목록</h1>
      <ProductFilter />
      <ProductList />
    </div>
  )
} 