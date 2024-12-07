import { useProductStore } from '../../../stores/products'

export function ProductList() {
  const products = useProductStore((state) => state.products)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">{product.price}원</p>
        </div>
      ))}
    </div>
  )
} 