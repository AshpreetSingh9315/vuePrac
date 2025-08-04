<!-- Composition Api -->

<script setup>
import { ref } from 'vue'

const name = ref('Ash Singh')
const status = ref('active')
const tasks = ref(['Learn', 'write', 'domore'])
const newTask = ref('')

const changeStatus = () => {
  if (status.value === 'true') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'false'
  } else {
    status.value = 'true'
  }
}

const addToTask = () => {
  if (newTask.value.trim !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}
</script>

<template>
  <div class="bg-black text-white p-10 space-y-4">
    <h1 class="text-3xl">
      {{ name }}
    </h1>
    <div>
      <p
        class="bg-blue-200 cursor-pointer px-4 py-2 text-black rounded-lg inline"
        @click="changeStatus"
        v-if="status === 'true'"
      >
        User is Active
      </p>
      <p
        class="bg-blue-200 cursor-pointer px-4 py-2 text-black rounded-lg inline"
        @click="changeStatus"
        v-else-if="status === 'pending'"
      >
        User is Pending
      </p>
      <p
        class="bg-blue-200 cursor-pointer px-4 py-2 text-black rounded-lg inline"
        @click="changeStatus"
        v-else="status == 'false'"
      >
        User is Not Active
      </p>
    </div>
    <ul class="mt-5">
      <li v-for="task in tasks">{{ task }}</li>
    </ul>
    <form @submit.prevent="addToTask" class="">
      <label for="">Task</label>
      <input type="text" name="newTask" v-model="newTask" class="border border-zinc-300 ml-2" />

      <button type="submit" class="px-4 py-2 bg-blue-600 text-white ml-2">Form Submit</button>
    </form>
  </div>
</template>
