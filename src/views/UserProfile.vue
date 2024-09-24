<template>
    <div class="flex">
        <SideNav  ref="sideNav" @select="updateView" @update-active-item="setActiveItem" />
    </div>
    <div class="border flex-1">
      <h1>This is an UserProfile page</h1>
    </div>
  </template>

<script>
import SideNav from "@/components/SideNav.vue";

export default {
  name: "UserProfile",
  components: {
    SideNav,
   
  },

  data() {
    return {
      currentView: 'defaultView',
    };
  },
  methods: {
  
    setActiveItem(itemName) {
      this.$refs.sideNav.setActiveItem(itemName); 
    },

    updateView(view) {
      console.log("updated")
      this.currentView = view; 
    }
  },
 
}
 
</script>