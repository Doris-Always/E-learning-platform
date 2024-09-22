<template>
  <v-container fluid>
    <v-row >
      <!-- Sidebar (SideNav) -->
      <!-- <v-col cols="" class="sidenav"> -->
        <div class="sidenav">
          <SideNav />
        </div>
       
      <!-- </v-col> -->

      <!-- Main Content (Course Detail) -->
      <v-col cols="8" class="main-content" >
        <CourseDetail :course="course" />
      </v-col>

      <!-- Right Panel (Course Information) -->
      <v-col cols="3" class="right-panel">
        <CourseInformation :course="course" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideNav from '@/components/SideNav.vue';
import CourseDetail from '@/components/CourseDetail.vue';
import CourseInformation from '@/components/CourseInformation.vue';

export default {
  name: 'HomeView',
  components: {
    SideNav,
    CourseDetail,
    CourseInformation,
  },
  data() {
    return {
      course: {
        id: 1,
        title: "Dummy Project Management Processes",
        instructor: "Prof. Dummy Breaker",
        image: "https://via.placeholder.com/640x360",
        description: "This is a dummy description for project management processes.",
        about: "This is a dummy about section.theis professoradd a very beauoti nand all options ",
        modules: [
          { name: "Introduction to Project Management", completed: true },
          { name: "Basic Concepts of Project Management", completed: false },
          { name: "Terminologies in Project Management", completed: false },
          { name: "Project Life Cycle", completed: false },
          { name: "Project Management Processes", completed: false }
        ]
      }
    };
  }
};
</script>

<style scoped>
.v-container {
  margin: 20px;
  border: 1px solid gray;
  background-color: white;
}

.sidenav, .main-content, .right-panel {
  /* border: 1px solid transparent; */
}

.sidenav {
  /* background-color: #f5f5f5; */
  /* height: 100vh; */
  /* border:1px solid red; */
  margin: 0;
  border-right: 2px solid rgb(219, 213, 213);
}

.main-content {
  padding: 50px;
  border-right: 2px solid rgb(219, 213, 213);
}

.right-panel {
  padding: 20px;
  /* background-color: #f9f9f9; */
}
</style>
