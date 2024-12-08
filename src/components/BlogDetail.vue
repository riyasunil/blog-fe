<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-[#FF9EB5] text-5xl font-bold">{{ blog.title }}</h1>
    <p v-html="blog.content"></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const blog = ref({})

const fetchBlog = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}api/blogs/${route.params.id}/`)
  blog.value = response.data
}

onMounted(fetchBlog)
</script>