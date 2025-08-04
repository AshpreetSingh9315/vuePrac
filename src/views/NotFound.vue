<script setup>
const goHome = () => {
  window.location.href = '/'
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 text-center px-4">
    <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <p class="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
    <button
      @click="goHome"
      class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Go to Homepage
    </button>
  </div>
</template>
