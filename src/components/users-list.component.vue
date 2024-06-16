<script>
import {getAll} from "@/helpers/user.service.js";

export default {
  name: "users-list",
  beforeMount() {
    this.getUsers();
  },
  data () {
    return {
      users: [],
      userService : getAll()
    }
  },
  methods: {
    getUsers() {
      this.userService.then((response) => {
        this.users = response.data;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-7 justify-content-center ">
    <div class="md:w-20rem" v-for="(user,index) in users" :key="index">
      <pv-card>
        <template #title> {{ user.firstName + " " + user.lastName}}</template>
        <template #content>
          <div class="flex flex-column gap-3">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
              quas!
            </p>
            <pv-button class=" w-10rem border-0 bg-red-500 hover:bg-green-300 scalable" label="Contact me"/>
          </div>
        </template>
      </pv-card>
    </div>
  </div>

</template>

<style scoped>

</style>