<template>
    <v-container fluid>
      <v-row >
    
          <div class="sidenav">
            <SideNav @select="updateView" @update-active-item="setActiveItem" />
          </div>
        
  
        <v-col cols="8" class="main-content" >
          <CourseDetail :is="currentView" :course="course" v-if="course"  />
        </v-col>
  
        <v-col cols="3" class="right-panel">
          <CourseInformation :course="course" v-if="course" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import SideNav from '@/components/SideNav.vue';
  import CourseDetail from '@/components/CourseDetail.vue';
  import CourseInformation from '@/components/CourseInformation.vue';
  import { getCourseById } from '@/services/courses';
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'CourseDetailView',
    components: {
      SideNav,
      CourseDetail,
      CourseInformation,
    },
    props: ['id'],
  computed: {
    ...mapGetters(['allCourses']),
    course() {
      return this.allCourses.find(course => course.id === this.id); 
    },
    currentView() {
      return 'CourseDetail';
    },
  },
  
  methods: {
    updateView(view) {
      console.log("updated")
      this.currentView = view; 
    }
  },
   
    async mounted() {
    if (this.allCourses.length === 0) {
      await this.$store.dispatch('fetchCourses');
    }

  let courseId = this.$route.params.id; 

  if (!courseId) {
    courseId = this.$store.state.lastViewedCourse || this.allCourses[0]?.id;
  }

  if (!courseId) {
    this.$router.push({ name: 'home' });
    return;
  }

    try {
      this.course = await getCourseById(courseId);
      console.log(this.course);
    } catch (error) {
      console.error('Error fetching course details:', error);
    }
  },
//   watch: {
//   $route(to) {
//     if (to.name === 'CourseDetailView') {
//       this.activeItem = 'Dashboard'; // Set active to course detail
//     } else if (to.name === 'home') {
//       this.activeItem = 'Menu'; // Set active to home
//     }
//   }
// }
  }

</script>
  
  <style scoped>
  .v-container {
    margin:0;
    /* margin: 20px; */
    border: 1px solid gray;
    background-color: white;
  }
  .v-col{
    margin: 0;
    padding: 0;
  }
  
  .sidenav {
    margin: 0;
    border-right: 2px solid rgb(219, 213, 213);
  }
  
  .main-content {
    /* padding: 50px; */
    border-right: 2px solid rgb(219, 213, 213);
  }
  
  .right-panel {
    /* padding: 20px; */
    
  }
  </style>
  