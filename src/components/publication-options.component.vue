<script>
import {getAllPublications} from "@/helpers/publications.service.js";
import {postPublication} from "@/helpers/publications.service.js";

export default {
  name: "publication-options",
  data(){
    return {
       publicationServiceGetAllPublications: getAllPublications,
       publicationServicePostPublication: postPublication,
      content: "",
      videoUrl: "",
      imageUrl: "",
      likes: 0,
      publication: null
    }
  },
  methods:{
     cancel(){
       this.content = "";
       this.videoUrl = "";
       this.imageUrl = "";
     },
    addPublication(){
      this.publication = {content:this.content, user:this.getUserId, likes:this.likes, video_url:this.videoUrl, img_url:this.imageUrl}
      this.publicationServicePostPublication(this.publication).then(() =>
          alert("Your publication is done")
      ).catch(() => alert("An error occurred") );
    }
  },
  computed: {
    getUserId() {
      try {
        return JSON.parse(sessionStorage.getItem('user'))._id;
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>

<template>
  <div v-if="getUserId != null">
    <h1 class="text-center py-2"> Enter your post here </h1>
    <div class="p-5 flex justify-content-center">
      <div class="flex flex-column gap-4 shadow-1 p-8 border-round-xl">
        <pv-input-text v-model="content" placeholder="Content"/>
        <pv-input-text v-model="videoUrl" placeholder="Video Url"/>
        <pv-input-text v-model="imageUrl" placeholder="Image Url"/>
        <div class="flex gap-3">
          <pv-button @click="addPublication()" label="Submit" severity="success"/>
          <pv-button @click="cancel()" label="Cancel" severity="danger"/>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-content-center my-8 ">
      <pv-card class="px-7 p-8 text-left">
        <template #title> <h3 class="text-red-500"> Please login to post</h3></template>
      </pv-card>
  </div>

</template>

<style scoped>

</style>