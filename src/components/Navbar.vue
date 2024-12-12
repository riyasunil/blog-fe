<!-- src/components/Navbar.vue -->
<template>
    <nav className = "flex flex-wrap flex-row w-full gap-x-16 tracking-widest p-4 bg-inherit mb-20">
      <div class="logo text-[#FFD1DC] hover:text-[#FF9EB5] text-lg">
       <router-link to="/">blog@riamisu</router-link> 
      </div>
      <ul>
        <li class="hover:text-[#FFA6B5]"><router-link to="/">/</router-link></li>
        <li class="hover:text-[#FFA6B5]"><router-link to="/tags">/ tags</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style>
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  </style>
  