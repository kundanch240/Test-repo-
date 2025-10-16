'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import api from '@/lib/api'
import toast from 'react-hot-toast'
import { FiUser, FiMail, FiCalendar, FiEdit3, FiSave, FiX } from 'react-icons/fi'

export default function AccountPage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    displayName: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  })

  useEffect(() => {
    if (user) {
      setProfileData({
        displayName: user.displayName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: {
          street: user.address?.street || '',
          city: user.address?.city || '',
          state: user.address?.state || '',
          zipCode: user.address?.zipCode || '',
          country: user.address?.country || ''
        }
      })
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setProfileData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      setProfileData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSave = async () => {
    try {
      await api.updateProfile(profileData)
      toast.success('Profile updated successfully!')
      setIsEditing(false)
    } catch (error) {
      toast.error('Failed to update profile. Please try again.')
      console.error('Profile update error:', error)
    }
  }

  const handleCancel = () => {
    // Reset to original data
    if (user) {
      setProfileData({
        displayName: user.displayName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: {
          street: user.address?.street || '',
          city: user.address?.city || '',
          state: user.address?.state || '',
          zipCode: user.address?.zipCode || '',
          country: user.address?.country || ''
        }
      })
    }
    setIsEditing(false)
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-trendvibe-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trendvibe-orange"
                  >
                    <FiEdit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      <FiSave className="w-4 h-4 mr-2" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trendvibe-orange"
                    >
                      <FiX className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="displayName"
                          value={profileData.displayName}
                          onChange={handleChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-trendvibe-orange focus:border-trendvibe-orange sm:text-sm"
                        />
                      ) : (
                        <p className="mt-1 text-sm text-gray-900">{profileData.displayName || 'Not provided'}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="mt-1 text-sm text-gray-900 flex items-center">
                        <FiMail className="w-4 h-4 mr-2" />
                        {profileData.email}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-trendvibe-orange focus:border-trendvibe-orange sm:text-sm"
                        />
                      ) : (
                        <p className="mt-1 text-sm text-gray-900">{profileData.phone || 'Not provided'}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Address Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Street Address</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="address.street"
                          value={profileData.address.street}
                          onChange={handleChange}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-trendvibe-orange focus:border-trendvibe-orange sm:text-sm"
                        />
                      ) : (
                        <p className="mt-1 text-sm text-gray-900">{profileData.address.street || 'Not provided'}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="address.city"
                            value={profileData.address.city}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-trendvibe-orange focus:border-trendvibe-orange sm:text-sm"
                          />
                        ) : (
                          <p className="mt-1 text-sm text-gray-900">{profileData.address.city || 'Not provided'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="address.state"
                            value={profileData.address.state}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-trendvibe-orange focus:border-trendvibe-orange sm:text-sm"
                          />
                        ) : (
                          <p className="mt-1 text-sm text-gray-900">{profileData.address.state || 'Not provided'}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="address.zipCode"
                            value={profileData.address.zipCode}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-trendvibe-orange focus:border-trendvibe-orange sm:text-sm"
                          />
                        ) : (
                          <p className="mt-1 text-sm text-gray-900">{profileData.address.zipCode || 'Not provided'}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Country</label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="address.country"
                            value={profileData.address.country}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-trendvibe-orange focus:border-trendvibe-orange sm:text-sm"
                          />
                        ) : (
                          <p className="mt-1 text-sm text-gray-900">{profileData.address.country || 'Not provided'}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <FiUser className="w-8 h-8 text-trendvibe-orange" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Member Since</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {user?.metadata?.creationTime ? 
                            new Date(user.metadata.creationTime).toLocaleDateString() : 
                            'N/A'
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <FiMail className="w-8 h-8 text-trendvibe-orange" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Email Verified</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {user?.emailVerified ? 'Yes' : 'No'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <FiCalendar className="w-8 h-8 text-trendvibe-orange" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500">Last Sign In</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {user?.metadata?.lastSignInTime ? 
                            new Date(user.metadata.lastSignInTime).toLocaleDateString() : 
                            'N/A'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}