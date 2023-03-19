<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script setup>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue';
import { ref } from 'vue'

const threads = ref(sourceData.threads)
</script>

<style scoped></style>