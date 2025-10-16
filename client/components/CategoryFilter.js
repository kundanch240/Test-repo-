'use client'

import { useState } from 'react'
import { CATEGORY_DATA, getCategoryOptions } from '@/lib/categories'
import { FiChevronDown, FiX } from 'react-icons/fi'

export default function CategoryFilter({ selectedCategory, onCategoryChange, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const categoryOptions = getCategoryOptions()

  const handleCategorySelect = (category) => {
    onCategoryChange(category)
    setIsOpen(false)
  }

  const selectedCategoryInfo = selectedCategory ? CATEGORY_DATA[selectedCategory] : null

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg transition-colors duration-200 ${
          selectedCategoryInfo 
            ? `${selectedCategoryInfo.color} ${selectedCategoryInfo.borderColor} border-2` 
            : 'bg-white border-gray-300 hover:border-gray-400'
        }`}
      >
        <div className="flex items-center space-x-2">
          {selectedCategoryInfo ? (
            <>
              <span className="text-lg">{selectedCategoryInfo.icon}</span>
              <span className="font-medium">{selectedCategoryInfo.name}</span>
            </>
          ) : (
            <span className="text-gray-500">All Categories</span>
          )}
        </div>
        <FiChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
            <div className="p-2">
              {/* All Categories Option */}
              <button
                onClick={() => handleCategorySelect(null)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                  !selectedCategory 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-lg">🛍️</span>
                <div>
                  <div className="font-medium">All Categories</div>
                  <div className="text-sm text-gray-500">Browse all products</div>
                </div>
              </button>

              {/* Category Options */}
              {categoryOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleCategorySelect(option.value)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                    selectedCategory === option.value 
                      ? `${option.color} bg-opacity-20` 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="text-lg">{option.icon}</span>
                  <div>
                    <div className="font-medium">{option.label}</div>
                    <div className="text-sm text-gray-500">
                      {CATEGORY_DATA[option.value].description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Mobile Category Filter Component
export function MobileCategoryFilter({ selectedCategory, onCategoryChange }) {
  const categoryOptions = getCategoryOptions()

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-900">Categories</h3>
      <div className="space-y-1">
        {/* All Categories */}
        <button
          onClick={() => onCategoryChange(null)}
          className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-left transition-colors duration-200 ${
            !selectedCategory 
              ? 'bg-gray-100 text-gray-900' 
              : 'hover:bg-gray-50 text-gray-700'
          }`}
        >
          <span>🛍️</span>
          <span className="text-sm font-medium">All Categories</span>
        </button>

        {/* Category Options */}
        {categoryOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onCategoryChange(option.value)}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-left transition-colors duration-200 ${
              selectedCategory === option.value 
                ? `${option.color} bg-opacity-20` 
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <span>{option.icon}</span>
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}