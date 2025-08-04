<!-- Options Api -->
 
<script>
export default {
  data() {
    return {
      message: 'Hello From Vue',
      status: 'true',
      tasks: ['Learn', 'write', 'domore'],
    }
  },
  methods: {
    changeStatus() {
      if (this.status === 'true') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'false'
      } else {
        this.status = 'true'
      }
    },
  },
}
</script>

<template>
  <div class="bg-black text-white p-10 space-y-4">
    <h1 class="text-3xl">
      {{ message }}
    </h1>
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
    <ul class="mt-5">
      <li v-for="task in tasks">{{ task }}</li>
    </ul>
  </div>
</template>
