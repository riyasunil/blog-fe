<template>
  <div class="flex flex-col gap-6">
    <!-- Blog Title -->
    <h1 class="text-[#FF9EB5] text-5xl font-bold">{{ blog.title }}</h1>

    <!-- Dynamic HTML Content -->
    <MyDynamicComponent tag="div" :html="blog.content" class="content" />

    <div></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import DOMPurify from 'dompurify';
import MyDynamicComponent from './MyDynamicComponent.vue';

const route = useRoute();
const blog = ref({});

const fetchBlog = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}api/blogs/${route.params.id}/`);
  
  // Sanitize content to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(response.data.content);
  
  // Update the blog object with sanitized content
  blog.value = { ...response.data, content: sanitizedContent };
};

onMounted(fetchBlog);
</script>

