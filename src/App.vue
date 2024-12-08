<template>
 <div id="app">
    <Navbar />
    <router-view />
  </div>

</template>

<script>
import BlogList from './components/BlogList.vue';
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar,
    BlogList,
  },
};
</script>

