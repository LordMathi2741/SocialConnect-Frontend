<script>

export default {
  name: "profile-section",
  data(){
    return {
      user: JSON.parse(sessionStorage.getItem('user'))
    }
  }
}
</script>

<template>
   <div v-if="user" class="flex justify-content-center py-8">
     <pv-card class="px-4 text-left">
       <template #title>My Profile</template>
       <template #content>
         <h1 class="text-sm"> FullName: {{ this.user.firstName + " " + this.user.lastName }}</h1>
          <h1 class="text-sm"> CreatedAt: {{ this.user.createdAt }}</h1>
       </template>
     </pv-card>
   </div>
  <div v-else class="flex justify-content-center my-8 ">
     <pv-card class="px-7 p-8 text-left">
       <template #title> <h3 class="text-red-300"> No user found</h3></template>
      </pv-card>
  </div>
</template>

<style scoped>

</style>