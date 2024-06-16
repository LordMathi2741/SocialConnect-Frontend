<script>

export default {
  name: "profile-section",
  data(){
    return {
      user: JSON.parse(localStorage.getItem('user'))
    }
  }
}
</script>

<template>
   <div class="flex justify-content-center py-8">
     <pv-card class="px-4 text-left">
       <template #title>My Profile</template>
       <template #content>
         <h1 class="text-sm"> FullName: {{ this.user.firstName + " " + this.user.lastName }}</h1>
          <h1 class="text-sm"> CreatedAt: {{ this.user.createdAt }}</h1>
       </template>
     </pv-card>
   </div>
</template>

<style scoped>

</style>