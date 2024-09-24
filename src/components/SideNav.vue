<template>
  <v-list class=" h-screen flex flex-col justify-between">
    <v-list-item-group>
      <v-img :src="require('../assets/e-learning-logo.png')" class="img-logo mb-8"></v-img>

      <v-list-item v-for="item in navItems.slice(0, navItems.length - 1)" :key="item.name" class="mb-2 "
        :class="{ 'active': item.name === activeItem }" @click="setActiveItem(item.name)">
        <MyIcons :name="item.icon" />
      </v-list-item>

      <v-list-item v-if="navItems.length" :class="{ 'active': navItems[navItems.length - 1].name === activeItem }"
        :key="navItems[navItems.length - 1].name" class="absolute inset-x-0 bottom-0 h-16"
        @click="setActiveItem(navItems[navItems.length - 1].name)">
        <MyIcons :name="navItems[navItems.length - 1].icon" />
      </v-list-item>

    </v-list-item-group>
  </v-list>

</template>

<script>

import MyIcons from './icons/MyIcons.vue';

export default {
  name: 'SideNav',
  components: {
    MyIcons
  },
  data() {
    return {
      activeItem: 'Menu',
      navItems: [
        { name: 'Menu', icon: 'menu' },
        { name: 'Dashboard', icon: 'book' },
        { name: 'Calender', icon: 'calender' },
        { name: 'Users', icon: 'users' },
        { name: 'Chat', icon: 'chat' },
        { name: 'Message', icon: 'message' },
        { name: 'Setting', icon: 'setting' },

      ],
    };
  },
  methods: {
    setActiveItem(itemName) {
      this.activeItem = itemName;
      if (itemName === 'Menu') {
        this.$router.push({ name: 'home' });
      } else if (itemName === 'Dashboard') {
        const courseId = this.$route.params.id;
        if (courseId) {
          this.$router.push({ name: 'CourseDetailView', params: { id: courseId } });
        } else {

          const lastViewedCourse = this.$store.state.lastViewedCourse || this.allCourses[0].id;
          this.$router.push({ name: 'CourseDetailView', params: { id: lastViewedCourse } });
        }
      } else if (itemName === 'Chat') {
        this.$router.push({ name: 'ChartView' });
      } else if (itemName === 'Users') {
        this.$router.push({ name: 'user' });
      } else if (itemName === 'Calender') {
        this.$router.push({ name: 'schedule' });
      } else if (itemName === 'Message') {
        this.$router.push({ name: 'notification' });
      } else if (itemName === 'Setting') {
        this.$router.push({ name: 'setting' });
      }
      this.$emit('select', itemName.name);
    }
  },
  watch: {
    $route(to) {
      if (to.name === 'CourseDetailView') {
        this.activeItem = 'Dashboard'; 
      } else if (to.name === 'home') {
        this.activeItem = 'Menu'; 
      }
  

    }
  }
}
</script>

<style scoped>
.v-list-item {
  padding-left: 0;
  margin-left: 0;
  width: 100%;

}

.v-list-item.active {
  background-color: rgb(248, 245, 245);
  border-right: 2px solid rgb(31, 31, 255);
}

.img-logo {
  width: 100px;
  height: 50px;
}
</style>