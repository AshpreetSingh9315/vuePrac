<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import Joblisting from '@/components/Joblisting.vue'
</script>

<template>
  <Hero title="Become A Vue Dev" subTitle="Find the Vue job that fits your skills and needs" />
  <HomeCards />
  <Joblisting :limit="3" :showButton="true" />
</template>
