<script setup>
import BackButton from '@/components/BackButton.vue'
import router from '@/router'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import 'vue3-toastify/dist/index.css'
import { toast } from 'vue3-toastify'

const route = useRoute()
const jobID = route.params.id

const state = reactive({
  job: {},
  isLoading: true,
})

onMounted(async () => {
  const response = await axios.get(`/api/jobs/${jobID}`)
  state.job = response.data
  state.isLoading = false
})

const deleteJob = async () => {
  try {
    const confirm = window.confirm('Are Your Sure you wanted to delete!!')
    if (confirm) {
      await axios.delete(`/api/jobs/${jobID}`)
      toast.success('Job Got Deleted')
      router.push('/jobs')
    }
  } catch (error) {
    console.log(error)
    toast.error('Job Not Deleted')
  }
}
</script>

<template>
  <BackButton />

  <section class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-70/30 w-full gap-6">
        <!-- Main content -->
        <main v-if="!state.isLoading">
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>
            <p class="mb-4">{{ state.job.description }}</p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ state.job.salary }}</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside v-if="!state.isLoading">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ state.job.company.name }}</h2>
            <p class="my-2">{{ state.job.company.description }}</p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>
            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full block"
            >
              Edit Job
            </RouterLink>
            <button
              @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
