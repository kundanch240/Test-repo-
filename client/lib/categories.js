export const CATEGORIES = {
  GADGETS: 'gadgets',
  FITNESS: 'fitness',
  BEAUTY: 'beauty',
  HOME_DECOR: 'home-decor',
  AUTO_ACCESSORIES: 'auto-accessories'
}

export const CATEGORY_DATA = {
  [CATEGORIES.GADGETS]: {
    name: 'Gadgets',
    description: 'Latest tech gadgets and innovative devices',
    icon: '📱',
    color: 'bg-blue-100 text-blue-800',
    hoverColor: 'hover:bg-blue-200',
    borderColor: 'border-blue-200'
  },
  [CATEGORIES.FITNESS]: {
    name: 'Fitness',
    description: 'Fitness equipment and wellness products',
    icon: '💪',
    color: 'bg-green-100 text-green-800',
    hoverColor: 'hover:bg-green-200',
    borderColor: 'border-green-200'
  },
  [CATEGORIES.BEAUTY]: {
    name: 'Beauty',
    description: 'Beauty and personal care products',
    icon: '💄',
    color: 'bg-pink-100 text-pink-800',
    hoverColor: 'hover:bg-pink-200',
    borderColor: 'border-pink-200'
  },
  [CATEGORIES.HOME_DECOR]: {
    name: 'Home Decor',
    description: 'Home decoration and lifestyle items',
    icon: '🏠',
    color: 'bg-purple-100 text-purple-800',
    hoverColor: 'hover:bg-purple-200',
    borderColor: 'border-purple-200'
  },
  [CATEGORIES.AUTO_ACCESSORIES]: {
    name: 'Auto Accessories',
    description: 'Car accessories and automotive products',
    icon: '🚗',
    color: 'bg-orange-100 text-orange-800',
    hoverColor: 'hover:bg-orange-200',
    borderColor: 'border-orange-200'
  }
}

export const getCategoryInfo = (category) => {
  return CATEGORY_DATA[category] || {
    name: 'All Categories',
    description: 'Browse all products',
    icon: '🛍️',
    color: 'bg-gray-100 text-gray-800',
    hoverColor: 'hover:bg-gray-200',
    borderColor: 'border-gray-200'
  }
}

export const getAllCategories = () => {
  return Object.values(CATEGORIES)
}

export const getCategoryOptions = () => {
  return Object.entries(CATEGORY_DATA).map(([key, data]) => ({
    value: key,
    label: data.name,
    icon: data.icon,
    color: data.color
  }))
}