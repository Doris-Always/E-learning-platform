<!-- <template>
    <v-container>
      <v-row>
        <h1 class="display-2 font-weight-bold mb-3">
         my Nav bar
        </h1>
      </v-row>
    </v-container>
</template>
  
<script>
  export default {
    name: "Navbar",
  };
</script> -->

<template>
    <v-app-bar app>
      <v-toolbar-title>My Navbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Link 1</v-btn>
      <v-btn text>Link 2</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "AppNavbar",
  });
  </script>
  
  <style scoped>
  /* Add specific styles for the navbar here */
  </style>
  