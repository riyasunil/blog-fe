<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-[#FF9EB5] text-5xl font-bold">{{ blog.title }}</h1>
    <!-- <div class="content" v-html="blog.content"></div> -->
    <div>
    <p v-for="paragraph in blog.content" :key="paragraph">{{ paragraph }}</p>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import DOMPurify from 'dompurify';


const route = useRoute()
const blog = ref({})

const fetchBlog = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}api/blogs/${route.params.id}/`);
  const sanitizedContent = DOMPurify.sanitize(response.data.content);
  blog.value = { ...response.data, content: sanitizedContent };
  // blog.value = response.data
}

onMounted(fetchBlog)
</script>

<style scoped>
.content h1 {
  color: #FF9EB5;
  font-size: 2rem;
  font-weight: bold;
}
</style>