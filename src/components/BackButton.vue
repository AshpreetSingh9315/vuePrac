<script setup>
import { ArrowLeft } from 'lucide-vue-next'

const goBack = () => {
  window.history.back()
}
</script>

<template>
  <div class="py-5 px-8 bg-white text-green-800 flex gap-4 items-center" @click="goBack">
    <ArrowLeft /> Back
  </div>
</template>
