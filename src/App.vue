<script setup>
import FooterPage from "@/public/footer-page.component.vue";
import HomeNavbar from "@/public/home-navbar.component.vue";
</script>

<template>
  <home-navbar/>
  <router-view/>
  <div class="modificable">
    <footer-page/>
  </div>
</template>

<style scoped>

</style>
