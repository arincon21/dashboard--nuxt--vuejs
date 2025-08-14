<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Panel Lateral Izquierdo -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      <!-- Formas geométricas decorativas -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-32 h-32 bg-blue-400 opacity-20 rounded-lg transform rotate-12"></div>
        <div class="absolute bottom-32 right-20 w-40 h-40 bg-purple-400 opacity-15 rounded-lg transform -rotate-12"></div>
        <div class="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300 opacity-25 rounded-full"></div>
      </div>
      
      <!-- Contenido Principal -->
      <div class="relative z-10 flex flex-col justify-center px-12 w-full">
        <!-- Logo -->
        <div class="mb-8">
          <div class="w-8 h-8 bg-white rounded border-2 border-white flex items-center justify-center">
            <div class="w-4 h-4 border-2 border-blue-600 rounded"></div>
          </div>
        </div>
        
        <!-- Título y Descripción -->
        <div class="mb-12">
          <h1 class="text-white text-3xl font-light mb-4">Designed for Individuals</h1>
          <p class="text-blue-100 text-lg leading-relaxed">
            See the analytics and grow your data<br />
            remotely, from anywhere!
          </p>
        </div>
        
        <!-- Preview de la aplicación -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4 bg-white rounded border flex items-center justify-center">
                <div class="w-2 h-2 border border-blue-600 rounded"></div>
              </div>
              <span class="text-white text-sm font-medium">Example File</span>
            </div>
            <div class="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-pink-400"></div>
          </div>
          
          <!-- Toolbar -->
          <div class="flex items-center space-x-2 mb-3">
            <div class="flex space-x-1">
              <div class="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <div class="w-3 h-3 bg-white/40 rounded"></div>
              </div>
              <div class="w-6 h-6 bg-white/20 rounded"></div>
              <div class="w-6 h-6 bg-white/20 rounded"></div>
              <div class="w-6 h-6 bg-white/20 rounded"></div>
            </div>
            <div class="flex space-x-1 ml-4">
              <div class="w-6 h-6 bg-white/20 rounded"></div>
              <div class="w-6 h-6 bg-white/20 rounded"></div>
              <div class="w-6 h-6 bg-white/20 rounded"></div>
            </div>
          </div>
          
          <!-- Spreadsheet Preview -->
          <div class="bg-white/90 rounded p-2">
            <div class="grid grid-cols-3 gap-1">
              <div class="text-xs text-gray-600 font-medium p-1">A</div>
              <div class="text-xs text-gray-600 font-medium p-1">B</div>
              <div class="text-xs text-gray-600 font-medium p-1">C</div>
              <div class="h-4 bg-gray-100 rounded p-1"></div>
              <div class="h-4 bg-gray-100 rounded p-1"></div>
              <div class="h-4 bg-gray-200 rounded p-1"></div>
              <div class="h-4 bg-gray-100 rounded p-1"></div>
              <div class="h-4 bg-gray-200 rounded p-1"></div>
              <div class="h-4 bg-gray-100 rounded p-1"></div>
            </div>
          </div>
          
          <!-- Avatar en la esquina -->
          <div class="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-4 border-white shadow-lg"></div>
        </div>
      </div>
    </div>
    
    <!-- Panel de Login -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div class="max-w-md w-full space-y-8">
        <!-- Título del Login -->
        <div class="text-center lg:text-left">
          <h2 class="text-2xl font-normal text-gray-900 mb-8">Login</h2>
        </div>
        
        <!-- Mensaje de Error -->
        <div v-if="errorMessage" class="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">{{ errorMessage }}</h3>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10"
              placeholder="name@mail.com"
            />
          </div>
          
          <!-- Password -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <NuxtLink to="/reset-password" class="text-sm text-blue-600 hover:text-blue-500">
                Reset Password
              </NuxtLink>
            </div>
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10"
              placeholder="••••••••••"
            />
          </div>
          
          <!-- Remember Me -->
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="form.rememberMe"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-700">
              Remember Password
            </label>
          </div>
          
          <!-- Login Button -->
          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <span v-if="!isLoading">Login</span>
              <span v-else class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            </button>
          </div>
          
          <!-- Sign Up Link -->
          <div class="text-center">
            <span class="text-sm text-gray-600">Don't have an account? </span>
            <NuxtLink to="/signup" class="text-sm text-blue-600 hover:text-blue-500 font-medium">
              Sign up
            </NuxtLink>
          </div>
          
          <!-- Divider -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-100 text-gray-500">or</span>
            </div>
          </div>
          
          <!-- Google Sign In -->
          <div>
            <button
              type="button"
              @click="handleGoogleLogin"
              class="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Authorize with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'

const { saveSession } = useAuth()

// Reactive form data
const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const isLoading = ref(false)
const errorMessage = ref('')

onMounted(() => {
  loadRememberedCredentials()
})

// Cargar credenciales recordadas
const loadRememberedCredentials = () => {
  if (process.client) {
    const rememberedEmail = localStorage.getItem('remembered_email')
    const rememberedPassword = localStorage.getItem('remembered_password')
    
    if (rememberedEmail) {
      form.email = rememberedEmail
      form.rememberMe = true
    }
    
    if (rememberedPassword) {
      form.password = rememberedPassword
    }
  }
}

// Guardar credenciales si el usuario lo solicita
const saveCredentials = () => {
  if (process.client) {
    if (form.rememberMe) {
      localStorage.setItem('remembered_email', form.email)
      localStorage.setItem('remembered_password', form.password)
    } else {
      localStorage.removeItem('remembered_email')
      localStorage.removeItem('remembered_password')
    }
  }
}

// Método principal de login
const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    // Validación básica
    if (!form.email || !form.password) {
      throw new Error('Por favor completa todos los campos')
    }
    
    // Simular llamada API de autenticación
    console.log('Intentando login con:', { email: form.email, rememberMe: form.rememberMe })
    
    // Simular respuesta del servidor (reemplaza con tu API real)
    const response = await simulateApiLogin(form.email, form.password)
    
    if (response.success) {
      // Guardar credenciales si el usuario lo desea
      saveCredentials()
      
      // Guardar sesión
      saveSession(response.user, response.token, response.refreshToken)
      
      // Redireccionar al dashboard
      await navigateTo('/dashboard')
      
    } else {
      throw new Error(response.message || 'Credenciales inválidas')
    }
    
  } catch (error) {
    console.error('Login failed:', error)
    errorMessage.value = error.message || 'Error al iniciar sesión'
  } finally {
    isLoading.value = false
  }
}

// Simular API de login (reemplaza con tu endpoint real)
const simulateApiLogin = async (email, password) => {
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Simular validación de credenciales
  const validCredentials = [
    { email: 'admin@example.com', password: '123456' },
    { email: 'user@test.com', password: 'password' },
    { email: form.email, password: form.password } // Aceptar cualquier credencial para demo
  ]
  
  const user = validCredentials.find(cred => 
    cred.email === email && cred.password === password
  )
  
  if (user || (email && password)) {
    // Simular respuesta exitosa
    return {
      success: true,
      user: {
        id: Date.now(),
        name: email.split('@')[0],
        email: email,
        role: 'user',
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=4F46E5&color=fff`
      },
      token: `jwt_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      refreshToken: `refresh_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      expiresIn: 3600 // 1 hora
    }
  } else {
    return {
      success: false,
      message: 'Email o contraseña incorrectos'
    }
  }
}

// Google Login
const handleGoogleLogin = async () => {
  try {
    console.log('Iniciando login con Google...')
    
    // Simular autenticación con Google (reemplaza con Google OAuth real)
    const googleUser = {
      id: 'google_' + Date.now(),
      name: 'Usuario Google',
      email: 'usuario@gmail.com',
      role: 'user',
      avatar: 'https://ui-avatars.com/api/?name=Usuario+Google&background=EA4335&color=fff',
      provider: 'google'
    }
    
    const token = `google_jwt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Guardar sesión
    saveSession(googleUser, token)
    
    console.log('Login con Google exitoso')
    await navigateTo('/dashboard')
    
  } catch (error) {
    console.error('Error en Google login:', error)
    errorMessage.value = 'Error al autenticar con Google'
  }
}

// SEO Meta para Nuxt
useHead({
  title: 'Login - Tu Aplicación',
  meta: [
    { name: 'description', content: 'Inicia sesión en tu cuenta' }
  ]
})
</script>

<style scoped>
/* Estilos adicionales si es necesario */
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>