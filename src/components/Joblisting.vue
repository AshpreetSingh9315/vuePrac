<script setup>
import jobData from '@/jobs.json'
import { defineProps, ref } from 'vue'
import SingleJobListing from './SingleJobListing.vue'

const jobs = ref(jobData)
const data = jobs?._rawValue?.jobs
console.log(data)

defineProps({
  limit: Number,
  showButton: Boolean,
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SingleJobListing
          v-for="job in data.slice(0, limit || data.length)"
          :key="job.id"
          :job="job"
          class="bg-white rounded-xl shadow-md relative"
        />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <a
      href="jobs.html"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </a>
  </section>
</template>
