<script>
import LoginSection from "@/components/login-section.component.vue";

export default {
  name: "the-login-page",
  components: {LoginSection},
}
</script>

<template>
  <h1 class="text-center py-4"> Please enter your credentials </h1>
   <div class="flex justify-content-center py-8">
     <login-section/>
   </div>
</template>

<style scoped>

</style>