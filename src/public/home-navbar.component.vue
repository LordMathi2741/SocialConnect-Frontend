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
        <li class="hover: cursor-pointer hover:text-green-700 scalable"> Home </li>
        <li class="hover: cursor-pointer hover:text-green-700 scalable"> Make your post </li>
        <li class="hover: cursor-pointer hover:text-green-700 scalable"> View Profile </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>