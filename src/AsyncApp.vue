<script setup>
import { ref, onMounted } from 'vue'
// Fetch APi Dtaa Form Json and delete it
// https://jsonplaceholder.typicode.com/todos
const name = ref('Ash Singh')
const tasks = ref([])
const newTask = ref('')
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((val) => val.title)
  } catch (error) {
    console.log(error)
  }
})

const addToTask = () => {
  if (newTask.value.trim !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <p>Hi {{ name }}</p>

  <form @submit.prevent="addToTask">
    <label for="Task">Add Task :</label>
    <input name="newTask" type="text" v-model="newTask" class="border border-zinc-200" />

    <button type="submit">Click here</button>
  </form>

  <ol class="mt-4 list-disc">
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}
      <span @click="deleteTask(index)" class="cursor-pointer">❌</span>
    </li>
  </ol>
</template>

<style></style>
