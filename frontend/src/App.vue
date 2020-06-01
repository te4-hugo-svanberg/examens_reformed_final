<template>
  <div id="app">
    <NavBarComponent />
    <router-view>
    </router-view>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NavBarComponent from "@/components/NavBarComponent.vue";

@Component({
  components: {
    NavBarComponent
  },
})

export default class App extends Vue {}
</script>
