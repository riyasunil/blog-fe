<template>
  <div class="flex flex-col gap-6 p-4">
    <h1 class="text-[#FF9EB5] text-3xl md:text-5xl font-bold">{{ blog.title }}</h1>
    <p><small>Posted on: {{ blog.created_at }}</small></p>
    <div class="content tracking-wide" v-html="blog.content"></div>
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

<style>
.content h1 {
  font-size: 32px;
}
.content h2 {
  font-size: 24px;
}
.content h3 {
  font-size: 18px;
}
.content h4 {
  font-size: 17px;
}
.content p {
  font-size: 16px;
}
.content table{
  background-color: #3A3A3A;
  border-radius: 5px;
  width: 100%; /* Makes the table full width of its container */
  max-width: 100%; /* Ensures the table doesn't exceed its container */
  table-layout: auto;
  overflow-x: auto;
  display: block;
}
.content td{
  padding: 1rem;
}
</style>