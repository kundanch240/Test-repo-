'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  FiMenu, 
  FiX, 
  FiSearch, 
  FiShoppingCart, 
  FiUser,
  FiHeart,
  FiLogOut,
  FiChevronDown,
  FiSettings
} from 'react-icons/fi'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { CATEGORY_DATA, getCategoryOptions } from '@/lib/categories'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)
  const { cartItems } = useCart()
  const { user, logout } = useAuth()
  const router = useRouter()

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const handleLogout = async () => {
    await logout()
    setShowUserMenu(false)
    router.push('/')
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const categoryOptions = getCategoryOptions()

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-trendvibe-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TrendVibe Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-trendvibe-orange transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                className="flex items-center space-x-1 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300 font-medium"
              >
                <span>Categories</span>
                <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${showCategoryMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {showCategoryMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowCategoryMenu(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-20 py-2">
                    <Link
                      href="/shop"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setShowCategoryMenu(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <span>🛍️</span>
                        <span>All Categories</span>
                      </div>
                    </Link>
                    {categoryOptions.map((category) => (
                      <Link
                        key={category.value}
                        href={`/shop?category=${category.value}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setShowCategoryMenu(false)}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{category.icon}</span>
                          <span>{category.label}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-trendvibe-orange focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-trendvibe-orange transition-colors duration-300"
              >
                <FiSearch className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
            >
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="hidden sm:block p-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300 relative"
            >
              <FiHeart className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="p-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300 relative"
            >
              <FiShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-trendvibe-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            {user ? (
              <div className="hidden sm:block relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                >
                  <FiUser className="w-5 h-5" />
                  <span className="text-sm font-medium">{user.displayName || user.email}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/account"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Account
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Orders
                    </Link>
                    {user.role === 'admin' && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <FiSettings className="inline w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FiLogOut className="inline w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-trendvibe-orange transition-colors duration-300 font-medium"
                >
                  Sign In
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/register"
                  className="text-gray-700 hover:text-trendvibe-orange transition-colors duration-300 font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-trendvibe-orange focus:border-transparent"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <div className="px-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Categories */}
              <div className="pt-2 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-500 mb-2">Categories</div>
                <Link
                  href="/shop"
                  className="block py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <span>🛍️</span>
                    <span>All Categories</span>
                  </div>
                </Link>
                {categoryOptions.map((category) => (
                  <Link
                    key={category.value}
                    href={`/shop?category=${category.value}`}
                    className="block py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Account Links */}
            <div className="px-4 pt-4 border-t border-gray-200 space-y-2">
              <Link
                href="/wishlist"
                className="flex items-center py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FiHeart className="w-5 h-5 mr-3" />
                Wishlist
              </Link>
              
              {user ? (
                <>
                  <Link
                    href="/account"
                    className="flex items-center py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser className="w-5 h-5 mr-3" />
                    My Account
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser className="w-5 h-5 mr-3" />
                    My Orders
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      href="/admin"
                      className="flex items-center py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <FiSettings className="w-5 h-5 mr-3" />
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsOpen(false)
                    }}
                    className="flex items-center py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                  >
                    <FiLogOut className="w-5 h-5 mr-3" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser className="w-5 h-5 mr-3" />
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center py-2 text-gray-700 hover:text-trendvibe-orange transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser className="w-5 h-5 mr-3" />
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}