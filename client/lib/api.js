import { auth } from './firebase'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

class ApiClient {
  async getAuthToken() {
    const user = auth.currentUser
    if (user) {
      return await user.getIdToken()
    }
    return null
  }

  async request(endpoint, options = {}) {
    const token = await this.getAuthToken()
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config)
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'An error occurred')
    }
    
    return response.json()
  }

  // Firebase Auth specific endpoints
  async getProfile() {
    return this.request('/firebase-auth/profile')
  }

  async updateProfile(data) {
    return this.request('/firebase-auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async verifyToken() {
    return this.request('/firebase-auth/verify-token', {
      method: 'POST',
    })
  }

  // Generic API methods
  async get(endpoint) {
    return this.request(endpoint)
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    })
  }
}

export default new ApiClient()