'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import api from '@/lib/api'

const ProductContext = createContext({})

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch all products
  const fetchProducts = async (params = {}) => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get('/products', { params })
      setProducts(response.data)
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error fetching products:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Add a new product
  const addProduct = async (productData) => {
    try {
      const response = await api.post('/products', productData)
      setProducts(prev => [response.data, ...prev])
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error adding product:', err)
      throw err
    }
  }

  // Update a product
  const updateProduct = async (productId, productData) => {
    try {
      const response = await api.put(`/products/${productId}`, productData)
      setProducts(prev => 
        prev.map(product => 
          product._id === productId ? response.data : product
        )
      )
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error updating product:', err)
      throw err
    }
  }

  // Delete a product
  const deleteProduct = async (productId) => {
    try {
      await api.delete(`/products/${productId}`)
      setProducts(prev => prev.filter(product => product._id !== productId))
    } catch (err) {
      setError(err.message)
      console.error('Error deleting product:', err)
      throw err
    }
  }

  // Get a single product
  const getProduct = async (productId) => {
    try {
      const response = await api.get(`/products/${productId}`)
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error fetching product:', err)
      throw err
    }
  }

  // Add a product review
  const addReview = async (productId, reviewData) => {
    try {
      const response = await api.post(`/products/${productId}/reviews`, reviewData)
      // Update the product in the products list
      setProducts(prev => 
        prev.map(product => 
          product._id === productId ? response.data : product
        )
      )
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error adding review:', err)
      throw err
    }
  }

  // Get featured products
  const getFeaturedProducts = async () => {
    try {
      const response = await api.get('/products', { params: { featured: 'true' } })
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error fetching featured products:', err)
      throw err
    }
  }

  // Get trending products
  const getTrendingProducts = async () => {
    try {
      const response = await api.get('/products', { params: { trending: 'true' } })
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error fetching trending products:', err)
      throw err
    }
  }

  // Search products
  const searchProducts = async (query, filters = {}) => {
    try {
      const params = { search: query, ...filters }
      const response = await api.get('/products', { params })
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error searching products:', err)
      throw err
    }
  }

  // Filter products by category
  const getProductsByCategory = async (category) => {
    try {
      const response = await api.get('/products', { params: { category } })
      return response.data
    } catch (err) {
      setError(err.message)
      console.error('Error fetching products by category:', err)
      throw err
    }
  }

  // Refresh products (useful for admin panel)
  const refreshProducts = () => {
    return fetchProducts()
  }

  const value = {
    products,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    addReview,
    getFeaturedProducts,
    getTrendingProducts,
    searchProducts,
    getProductsByCategory,
    refreshProducts
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}