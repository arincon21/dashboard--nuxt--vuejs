<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <aside class="w-72 bg-white border-r border-gray-200 flex-shrink-0">
      <div class="p-6">
        <!-- Logo -->
        <div class="flex items-center gap-2 mb-8">
          <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">ED</span>
          </div>
          <span class="font-bold text-xl">EduPlan</span>
        </div>

        <!-- Navigation -->
        <nav class="space-y-1">
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2-2V3a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 002 2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2v-4z"></path>
            </svg>
            Overview
          </a>

          <!-- Students Section -->
          <div class="pt-4">
            <button class="flex items-center justify-between w-full px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
                Students
              </div>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>

          <!-- Activities Section -->
          <div>
            <button class="flex items-center justify-between w-full px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Activities
              </div>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
            </button>
            
            <!-- Submenu -->
            <div class="ml-8 mt-1 space-y-1">
              <a href="#" class="block px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg font-medium">
                Active Activities
              </a>
              <a href="#" class="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100">
                Completed Activities
              </a>
            </div>
          </div>

          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
            Integration
          </a>

          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            Tasks
          </a>
        </nav>

        <!-- Bottom Section -->
        <div class="absolute bottom-6 left-6 right-6 space-y-2">
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Settings
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Help & Support
            <span class="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">3</span>
          </a>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-screen">
      <!-- Header -->
      <header class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="relative">
              <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" placeholder="Search or type a command" class="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5-5-5h5v-12"></path>
              </svg>
            </button>
            <div class="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1&facepad=2&auto=format&ixlib=rb-4.0.3" alt="User" class="w-8 h-8 rounded-full">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="flex-1 flex">
        <!-- Left Panel - Student Info -->
        <div class="w-80 bg-white border-r border-gray-200 p-6">
          <!-- Back Button -->
          <button class="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="text-sm">Active Activities</span>
            <span class="text-gray-400">></span>
            <span class="text-sm">Tomas Vallejo</span>
          </button>

          <!-- Student Profile -->
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">TV</span>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Tomas Vallejo</h2>
            <p class="text-gray-500 text-sm">Group | #F528352</p>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2 mb-6">
            <button class="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Mail
            </button>
            <button class="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Call
            </button>
            <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </button>
          </div>

          <!-- Last Activity -->
          <div class="mb-6">
            <p class="text-sm text-gray-500 mb-2">• Last Activity: <strong>28 July 2024 at 09:00AM</strong></p>
          </div>

          <!-- Tabs -->
          <div class="flex border-b border-gray-200 mb-6">
            <button class="px-3 py-2 text-sm font-medium text-gray-900 border-b-2 border-blue-500">
              Activity Info
            </button>
            <button class="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              Activities
            </button>
          </div>

          <!-- Activity Timeline -->
          <div class="space-y-4">
            <div class="flex gap-3">
              <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm text-gray-900">
                  <strong>Teacher</strong> tagged you in a comment
                </p>
                <p class="text-xs text-gray-500">Today 12:00 PM</p>
                <div class="flex items-center gap-2 mt-1">
                  <div class="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-xs text-green-600 font-medium">Accepted</span>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2-2V3a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 002 2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm text-gray-900">
                  <strong>Teacher</strong> shared deal progress
                </p>
                <p class="text-xs text-gray-500">Today 12:00 PM</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">New</span>
                  <span class="text-xs text-gray-400">→</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">In progress</span>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm text-gray-900">
                  <strong>Teacher</strong> commented on Documents update
                </p>
                <p class="text-xs text-gray-500">Today 4:00 AM</p>
              </div>
            </div>
          </div>

          <!-- Activity Requested -->
          <div class="mt-8 p-4 bg-gray-50 rounded-lg">
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span class="text-sm font-medium text-gray-700">ACTIVITY REQUESTED</span>
            </div>
            <p class="text-sm text-gray-600 mb-1"><strong>Activity Purpose</strong></p>
            <p class="text-sm text-gray-900 font-medium mb-3">AWS Interview Practice</p>
            <p class="text-sm text-gray-600 mb-1"><strong>Score Target</strong></p>
            <p class="text-sm text-gray-900 font-medium">79 Points</p>
          </div>
        </div>

        <!-- Right Panel - Main Content -->
        <div class="flex-1 p-6 bg-gray-50">
          <!-- Header -->
          <div class="mb-6">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Property Loan</h1>
            <div class="flex items-center gap-4 text-sm text-gray-600">
              <span>Created On: <strong>2 Mar, 2025</strong></span>
              <div class="flex items-center gap-2">
                <div class="flex -space-x-1">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=24&h=24&fit=crop&crop=face&auto=format&ixlib=rb-4.0.3" alt="Member" class="w-6 h-6 rounded-full border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format&ixlib=rb-4.0.3" alt="Member" class="w-6 h-6 rounded-full border-2 border-white">
                  <div class="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                    <span class="text-xs font-medium text-gray-700">+2</span>
                  </div>
                </div>
                <button class="text-blue-600 text-sm font-medium hover:text-blue-800">+ Add Member</button>
              </div>
            </div>
          </div>

          <!-- Navigation Tabs -->
          <div class="flex gap-8 border-b border-gray-200 mb-6">
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Details</button>
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Position</button>
            <button class="px-1 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Documents</button>
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Assessment</button>
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Notes</button>
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1">
              Tasks <span class="bg-gray-900 text-white text-xs px-1.5 py-0.5 rounded-full">7</span>
            </button>
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Emails</button>
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">Calls</button>
            <button class="px-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">SMS</button>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span class="text-sm text-gray-500">Docs Owned</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">5</div>
              <button class="text-sm text-blue-600 hover:text-blue-800 mt-2">Go To Activities →</button>
            </div>

            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm text-gray-500">Docs Pending Reviews</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">4</div>
            </div>

            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm text-gray-500">Docs Accepted</span>
              </div>
              <div class="text-3xl font-bold text-gray-900">12</div>
              <span class="text-sm text-gray-400">/13</span>
            </div>
          </div>

          <!-- Document Actions -->
          <div class="flex justify-between items-center mb-6">
            <div class="flex gap-2">
              <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                All Documents
              </button>
              <button class="px-4 py-2 text-gray-600 text-sm font-medium hover:text-gray-900">
                Portal Milestones
              </button>
            </div>
            <div class="flex gap-2">
              <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                + Add Template
              </button>
              <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Download Zip
              </button>
              <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Convert to PDF
              </button>
            </div>
          </div>

          <!-- Documents List -->
          <div class="bg-white rounded-lg border border-gray-200">
            <!-- Document Item 1 -->
            <div class="flex items-center justify-between p-4 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div>
                  <h4 class="font-medium text-gray-900">Copies of Voter Issued Identification</h4>
                  <p class="text-sm text-gray-500">voter.png • 5MB • 02 Jan, 2025</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Document Item 2 -->
            <div class="flex items-center justify-between p-4 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div>
                  <h4 class="font-medium text-gray-900">Property Document</h4>
                  <p class="text-sm text-gray-500">Doc.pdf • 5MB • 02 Jan, 2025</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Document Item 3 -->
            <div class="flex items-center justify-between p-4 border-b border-gray-100">
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div>
                  <h4 class="font-medium text-gray-900">Mortgage Statement (For All Loans)</h4>
                  <p class="text-sm text-gray-500">Display.png • 5MB • 02 Jan, 2025</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Document Item 4 -->
            <div class="flex items-center justify-between p-4">
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div>
                  <h4 class="font-medium text-gray-900">All Bank Statements (Last 2 Months)</h4>
                  <p class="text-sm text-gray-500">Doc.pdf • 5MB • 02 Jan, 2025</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </button>
                <button class="p-1 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Nuxt 3 setup - Educational dashboard with CRM-style layout
</script>

<style scoped>
/* Additional custom styles if needed */
</style>