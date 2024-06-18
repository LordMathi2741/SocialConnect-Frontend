<script>
import HomePageHeader from "@/components/home-page-header.component.vue";
import UsersList from "@/components/users-list.component.vue";
import FooterPage from "@/public/footer-page.component.vue";
import HomeNavbar from "@/public/home-navbar.component.vue";
import RecentlyPosts from "@/components/recently-posts.component.vue";

export default {
  name: "the-home-page",
  components: {RecentlyPosts, HomeNavbar, FooterPage, UsersList, HomePageHeader},
}
</script>

<template>
    <div class="p-8 mx-0 bg-gray-700">
      <home-page-header/>
      <users-list/>
      <recently-posts/>
    </div>
</template>

<style scoped>

</style>