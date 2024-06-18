<script>
import {getAllPublications, updatePublication} from "@/helpers/publications.service.js";

export default {
  name: "recently-posts",
  data() {
    return {
      publications: [],
      publicationServiceGetAll: getAllPublications(),
      publicationsSplice: [],
    }
  },
  beforeMount() {
    this.getPublications();

  },
  methods: {
    getPublications() {
      this.publicationServiceGetAll.then((response) => {
        this.publications = response.data;
        this.publicationsSplice = this.publications.splice(1, 5);
      }).catch((error) => {
        console.log(error);
      });
    },
    increaseLikes(id, publication) {
      publication.likes += 1;
      updatePublication(id, publication).then(() => {
        console.log("Likes updated");
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<template>
  <h1 class=" my-8 text-center text-green-300">Recently Posts</h1>
  <div class="flex  justify-content-center gap-7 flex-wrap" >
    <div v-for="publication in publicationsSplice" :key="publication.id">
      <div class="bg-white p-5 border-round-lg shadow-1 flex justify-content-center flex-column gap-5">
        <h2 class="text-sm md:text-base" > Publication: {{publication._id}}</h2>
        <p>{{publication.content}}</p>
        <img  width="200" :src="publication.img_url" alt="publication image">
        <p> Likes: {{ publication.likes}}</p>
        <div class="flex gap-3">
          <pv-button @click="increaseLikes(publication._id, publication)" class="pi pi-thumbs-up" severity="info"/>
          <pv-button class="pi pi-thumbs-down" severity="danger"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>