import { create } from 'zustand'
import { Product } from '../features/products/types/product'

interface ProductStore {
  products: Product[]
  selectedProduct: Product | null
  loading: boolean
  fetchProducts: () => Promise<void>
  fetchProductById: (id: number) => Promise<void>
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  selectedProduct: null,
  loading: false,
  fetchProducts: async () => {
    set({ loading: true })
    try {
      // API 호출 로직
      const response = await fetch('/api/products')
      const products = await response.json()
      set({ products, loading: false })
    } catch {
      set({ loading: false })
    }
  },
  fetchProductById: async (id) => {
    set({ loading: true })
    try {
      const response = await fetch(`/api/products/${id}`)
      const product = await response.json()
      set({ selectedProduct: product, loading: false })
    } catch {
      set({ loading: false })
    }
  }
})) 