<template>
    
    <div>
      <h1>{{ course.title }}</h1>
      <h2>{{ course.instructor }}</h2>
  
      <div class="image-box">
        <v-img :src="course.image" aspect-ratio="16/9"></v-img>
      </div>
  
      <v-divider></v-divider>
  
      <v-breadcrumbs>
        <v-breadcrumbs-item v-for="(crumb, index) in breadcrumbs" :key="index">{{ crumb }}</v-breadcrumbs-item>
      </v-breadcrumbs>
  
      <v-tabs v-model="activeTab" grow>
        <v-tab>Description</v-tab>
        <v-tab>Reviews</v-tab>
        <v-tab>Discussion</v-tab>
        <v-tab>Resources</v-tab>
      </v-tabs>
  
      <v-row>
        <v-tab-item v-if="activeTab === 'Description'">
          <p>{{ course.description }}</p>
        </v-tab-item>
  
        <v-tab-item v-if="activeTab === 'Reviews'">
          <p>Reviews content...</p>
        </v-tab-item>
  
        <v-tab-item v-if="activeTab === 'Discussion'">
          <p>Discussions content...</p>
        </v-tab-item>
  
        <v-tab-item v-if="activeTab === 'Resources'">
          <p>Resources content...</p>
        </v-tab-item>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseDetail',
    props: {
      course: Object,
    },
    data() {
      return {
        breadcrumbs: ['My Courses', 'Management', 'Project Management'],
        activeTab: 'Description',
      };
    },
  };
  </script>
  
  <style scoped>
  .image-box {
    margin-bottom: 20px;
  }
  </style>
  