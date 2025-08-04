<script setup>
import { defineProps, onMounted, reactive, ref } from 'vue'
import SingleJobListing from './SingleJobListing.vue'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

// const jobs = ref([])
const state = reactive({
  jobs: [],
  isLoading: true,
})

onMounted(async () => {
  try {
    const data = await axios.get('api/jobs')
    state.jobs = data.data
  } catch (error) {
    console.log('Error :', error)
  } finally {
    state.isLoading = false
  }
})

defineProps({
  limit: Number,
  showButton: Boolean,
})
</script>

<template>
  <section v-if="state.isLoading" class="flex justify-center items-center"><PulseLoader /></section>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SingleJobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
          class="bg-white rounded-xl shadow-md relative"
        />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <RouterLink
      to="jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Jobs
    </RouterLink>
  </section>
</template>
