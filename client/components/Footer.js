'use client'

import Link from 'next/link'
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { name: 'All Products', href: '/shop' },
      { name: 'Gadgets', href: '/shop?category=gadgets' },
      { name: 'Accessories', href: '/shop?category=accessories' },
      { name: 'Lifestyle', href: '/shop?category=lifestyle' },
      { name: 'Electronics', href: '/shop?category=electronics' },
    ],
    support: [
      { name: 'Track Order', href: '/track-order' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Admin Login', href: '/admin' },
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: 'https://facebook.com/trendvibestore' },
    { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com/trendvibestore' },
    { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com/trendvibestore' },
    { name: 'YouTube', icon: FiYoutube, href: 'https://youtube.com/trendvibestore' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-trendvibe-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TrendVibe Store</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your one-stop destination for trendy gadgets, accessories, and lifestyle products. 
              We bring you the latest trends at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-trendvibe-orange transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-trendvibe-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-trendvibe-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-4 h-4 text-trendvibe-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Trend Street<br />
                  Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 text-trendvibe-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-4 h-4 text-trendvibe-orange flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@trendvibestore.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest trends and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-trendvibe-orange focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-trendvibe-orange hover:bg-trendvibe-orange-dark text-white rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TrendVibe Store. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-trendvibe-orange transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-trendvibe-orange transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-trendvibe-orange transition-colors duration-300 text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}