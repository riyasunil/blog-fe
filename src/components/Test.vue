<template>
      <!-- Render the hardcoded HTML using v-html -->
       <p>sdjfnr</p>
      <div class="text-white" v-html="htmlContent"></div>
      <div>{{ htmlContent }}</div>
  </template>
  
  <script>
  export default {
    name: 'Test',
    data() {
      return {
        // Hardcoded HTML content
        htmlContent: `
          <h1 class="text-4xl bold">This is a dynamically rendered H1</h1>
          <h2>This is a dynamically rendered H2</h2>
          <p>This is a paragraph to demonstrate v-html rendering.</p>
        `
      };
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem; /* Adjust size for H1 */
    font-weight: bold;
  }
  h2 {
    font-size: 1.5rem; /* Adjust size for H2 */
    font-weight: semi-bold;
  }
  </style>