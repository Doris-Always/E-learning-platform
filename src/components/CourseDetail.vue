<template>

      <p class="text-color mx-8 py-4">My Courses / {{ course.category }} / <span class="text-black"> {{course.name}}</span> </p>
  
    
    <div v-if="course && course.instructor" class="mx-8">
      <div class="mb-4">
        <h1 class="my-2">{{ course.name}}</h1>
        <h2 class="instructor">{{ course.instructor.name }}</h2>
      </div>
     
  
      <div class="image-box mb-4" :style="{ backgroundImage: `url(${course.coursePicture})` }">
        <!-- <v-img :src="course.coursePicture" class="my-image"></v-img> -->
      </div>
  
      <v-divider></v-divider>
  
    
      <v-tabs class="" v-model="activeTab" grow>
        <v-tab>Description</v-tab>
        <v-tab>Reviews</v-tab>
        <v-tab>Discussion</v-tab>
        <v-tab>Resources</v-tab>
      </v-tabs>
  
      <v-row>
        <v-tabs-items v-model="activeTab">
      <v-tab-item key="Description">
        <p>{{ course.description }}</p>
      </v-tab-item>

      <v-tab-item key="Reviews">
        <ul>
          <li v-for="(review, index) in course.listOfReviews" :key="index">
            <strong>{{ review.user }}:</strong> {{ review.comment }} - {{ review.rating }} stars
          </li>
        </ul>
      </v-tab-item>

      <v-tab-item key="Discussion">
        <p>{{ course.discussion }}</p>
      </v-tab-item>

      <v-tab-item key="Resources">
        <ul>
          <li v-for="(resource, index) in course.resources" :key="index">{{ resource }}</li>
        </ul>
      </v-tab-item>
    </v-tabs-items>
    
      </v-row>
    </div>
    <div v-else>
    <p>Loading course details...</p>
  </div>
  </template>
  
  <script>

  export default {
    name: 'CourseDetail',
    props: {
    course: {
      type: Object,
      default: null, 
    },
  },
    data() {
      return {
        breadcrumbs: ['My Courses', 'Web Development', this.course ? this.course.name : ''],
        activeTab: 'Description',
      };
    },
    watch: {
    course(newVal) {
      if (newVal) {
        this.breadcrumbs = ['My Courses', 'Web Development', newVal.name];
      }
    },
  },
  };
  </script>
  
  <style scoped>
  .image-box {
    /* margin-bottom: 20px; */
    height: 400px;
    width:100%;
    background-size: cover;
    background-repeat:no-repeat;
    border-radius: 10px;
  }
  .my-image{
    width:100%;
  
    /* height: 300px; */


  }
  .instructor{
    color: rgb(169, 168, 168);
    font-size: 19px;
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    
  }
  .text-color{
    color: rgb(169, 168, 168);
  }
  </style>
  