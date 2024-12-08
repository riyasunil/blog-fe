<template>
    <div class="blog-list w-full p-5 bg-[#272727]">
      <h1>Blog Posts</h1>
      <div className = "bloglistcontainer">
        <div className = "blogindv p-0 border-b pb-2 border-[#ccc] mb-5" v-for="blog in blogs" :key="blog.id">
            <router-link :to="`/blog/${blog.slug}`">
          <h2 className = "hover:text-[#FFD1DC] text-3xl font-medium">{{ blog.title }}</h2>
        </router-link>
        <p class="truncate-content" v-html="truncateContent(blog.content)"></p>
        <p><small>Posted on: {{ blog.created_at }}</small></p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        blogs: [],
      };
    },
    created() {
      this.fetchBlogs();
    },
    methods: {
      async fetchBlogs() {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}api/blogs/`);
          this.blogs = response.data;
        } catch (error) {
          console.error('Error fetching blog posts:', error);
        }
      },
      truncateContent(content) {
      // Create a temporary DOM element to strip HTML tags
      const tempElement = document.createElement('div');
      tempElement.innerHTML = content;
      const textContent = tempElement.textContent || tempElement.innerText || '';
      // Truncate content and add ellipsis
      return textContent.length > 100 ? `${textContent.substring(0, 100)}...` : textContent;
    },
    },
    
  };
  </script>
  
  <style scoped>
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .truncate-content {
  white-space: nowrap;      /* Prevent text wrapping */
  overflow: hidden;         /* Hide any content that exceeds the width */
  text-overflow: ellipsis;  /* Add "..." at the end */
  max-width: 100%;          /* Ensure it fills the available space */
}
  </style>
