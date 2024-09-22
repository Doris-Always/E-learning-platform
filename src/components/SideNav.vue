<template>
    <v-list class="border-2 h-screen flex flex-col justify-between">
      <v-list-item-group>
        <v-img :src="require('../assets/e-learning-logo.png')" class="img-logo mb-8" ></v-img>
        <v-list-item v-for="item in navItems.slice(0, navItems.length - 1)" :key="item.name" class="mb-2 mx-2" >
        <MyIcons :name="item.icon" />
      </v-list-item>
      <v-list-item v-if="navItems.length" :key="navItems[navItems.length - 1].name" class="absolute inset-x-0 bottom-0 h-16 ">
      <MyIcons :name="navItems[navItems.length - 1].icon" />
      </v-list-item>
      </v-list-item-group>
    </v-list>

  </template>
  
  <script>
  
import MyIcons from './icons/MyIcons.vue';

  export default {
    name: 'SideNav',
    components:{
        MyIcons
    },
    data() {
      return {
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
  };
  </script>
  
  <style scoped>

.v-list-item {
  /* padding: 8px; */
}

  .img-logo{
    width: 100px;
    height: 50px;
  }
  </style>
  