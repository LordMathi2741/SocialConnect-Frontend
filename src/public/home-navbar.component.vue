<script>
export default {
  name: "home-navbar"
}
</script>

<template>
  <nav class="bg-green-300 text-bold">
    <div class="flex justify-content-between">
     <div class="p-3 text-black">
       <span class="pi pi-user"></span>
     </div>
      <ul class="flex flex-column md:flex-row gap-4 mx-5 text-white">
        <router-link to="/" class="hover: cursor-pointer hover:text-green-700 scalable nav-item"> Home </router-link>
        <router-link to="/login-page" class="hover: cursor-pointer hover:text-green-700 scalable nav-item"> Sign in </router-link>
        <router-link to="/" class="hover: cursor-pointer hover:text-green-700 scalable nav-item"> Make your post </router-link>
        <router-link to="/profile" class="hover: cursor-pointer hover:text-green-700 scalable nav-item"> View my profile </router-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>