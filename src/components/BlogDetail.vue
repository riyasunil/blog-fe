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
  width: 100%;
  max-width: 100%; 
  table-layout: auto;
  overflow-x: auto;
  display: block;
}
.content td{
  padding: 1rem;
}

/* Scrollbar styling */
.content table::-webkit-scrollbar {
  width: 10px; 
  height: 10px; 
}

.content table::-webkit-scrollbar-track {
  background: #2C2C2C; 
  border-radius: 5px; 
}

.content table::-webkit-scrollbar-thumb {
  background: #565656; 
  border-radius: 5px; 
  border: 2px solid #3A3A3A; 
}

.content table::-webkit-scrollbar-thumb:hover {
  background: #727272; 
}

.content table {
  scrollbar-color: #565656 #2C2C2C; 
  scrollbar-width: thin;
}

</style>