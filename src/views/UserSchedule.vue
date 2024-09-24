<template>
    <div class="flex ">
        <div>
            <SideNav ref="sideNav" @select="updateView" @update-active-item="setActiveItem" />
        </div>
        <div class="border flex-1">
            <h1>This is an UserSchedule page</h1>
        </div>
    </div>

</template>

<script>
import SideNav from "@/components/SideNav.vue";

export default {
    name: "UserSchedule",
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