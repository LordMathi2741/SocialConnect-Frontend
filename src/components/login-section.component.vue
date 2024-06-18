<script>

import {getAll} from "@/helpers/user.service.js";

export default {
  name: "login-section",
  data() {
    return {
      firstName: null,
      lastName: null,
      userService: getAll(),
      userFinded : false,
      user: null
    }
  },
  methods:{
    signIn(){
      this.userService.then((response) => {
        response.data.forEach((user) => {
          if(user.firstName === this.firstName && user.lastName === this.lastName){
              this.userFinded = true;
              this.user = user;
          }
        });
        this.verifySignIn();
      });
    },
    verifySignIn(){
      if(this.userFinded){
        sessionStorage.setItem("user", JSON.stringify(this.user));
        alert("You have successfully signed in")
      } else {
        alert("User not found");
      }
    }
  }
}
</script>

<template>
  <div class="p-8 border-round-lg shadow-3">
    <div class="flex flex-column justify-content-center align-content-center gap-3">
       <input  v-model="firstName" class=" w-10rem md:w-20rem p-3 border-1 border-gray-300  border-round-lg" type="text" placeholder="FirstName"/>
       <input v-model="lastName" class=" w-10rem md:w-20rem p-3 border-1 border-gray-300  border-round-lg" type="text" placeholder="LastName"/>
        <pv-button severity="success" @click="signIn" class="w-7rem border-round-lg border-transparent">Sign in</pv-button>
    </div>
  </div>
</template>

<style scoped>

</style>