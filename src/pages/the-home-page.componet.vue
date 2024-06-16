<script>
import HomePageHeader from "@/components/home-page-header.component.vue";
import UsersList from "@/components/users-list.component.vue";
import FooterPage from "@/public/footer-page.component.vue";
import HomeNavbar from "@/public/home-navbar.component.vue";

export default {
  name: "the-home-page",
  components: {HomeNavbar, FooterPage, UsersList, HomePageHeader},
}
</script>

<template>
  <home-navbar/>
    <div class="p-8 mx-0 bg-gray-700">
      <home-page-header/>
      <users-list/>
    </div>
    <footer-page/>
</template>

<style scoped>

</style>