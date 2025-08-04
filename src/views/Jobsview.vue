<script setup>
import Joblisting from '@/components/Joblisting.vue'
import jobData from '@/jobs.json'
import { ref } from 'vue'

const jobs = ref(jobData)
const data = jobs?._rawValue?.jobs
console.log(data)
</script>

<template><Joblisting /></template>
