<template>
  <div class="movies">
    <Movies />
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop  } from "vue-property-decorator";
// @ is an alias to /src
import Movies from "../components/Movies.vue";

@Component({
  components: {
    Movies
  },
})
export default class MoviesView extends Vue {}


</script>
