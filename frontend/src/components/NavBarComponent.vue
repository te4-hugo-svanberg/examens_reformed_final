<template>
    <div id="nav">
        <v-app>
            <v-app-bar
            color="#1B2335"
            dense
            dark app
          >

            <v-toolbar-title>HES Media Player</v-toolbar-title>
            <v-tabs fixed-tabs>
              <v-tab to="/">Home</v-tab>
              <v-tab to="/movies">Movies</v-tab>
            </v-tabs>

            <v-spacer></v-spacer>

          </v-app-bar>
        </v-app>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class NavBarComponent extends Vue {
    
}
</script>

<style scoped>
div {
    display: block;
}
</style>
