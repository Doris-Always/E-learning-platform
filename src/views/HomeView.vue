
<template>
  <v-container fluid>
    <v-row>
   
      <div class="sidenav" cols="1">
        <SideNav ref="sideNav" @select="updateView" @update-active-item="setActiveItem" /> 
        <!-- <SideNav @select="updateView"/>  -->
      </div>
       
      <v-col cols="11" :is="currentView">
        <v-row>
          <v-col
          v-for="course in allCourses" 
            :key="course.id"
            cols="12" sm="6" md="3"
          >
            <CourseCard :course="course" @navigate="goToCourse"  @update-active-item="setActiveItem" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import SideNav from "@/components/SideNav.vue";
import CourseCard from "@/components/CourseCard.vue";
// import { getAllCourses } from "@/services/courses";
import { getCourseById } from "@/services/courses";
import { mapGetters } from 'vuex';

export default {
  name: "HomeView",
  components: {
    SideNav,
    CourseCard,
  },
  computed: {
    ...mapGetters(['allCourses']),
  },
  data() {
    return {
      courses: [],
      currentView: 'defaultView',
      
     
    };
  },
  methods: {
    goToCourse(courseId) {
      this.$store.commit('setLastViewedCourse', courseId);
      this.$router.push({ name: "CourseDetailView", params: { id: courseId } });
      
    },
    setActiveItem(itemName) {
      this.$refs.sideNav.setActiveItem(itemName); 
    },
    updateView(view) {
      console.log("updated")
      this.currentView = view; 
    }
  },
 
   
  async mounted() {
  if (this.allCourses.length === 0) {
    await this.$store.dispatch('fetchCourses');
  }

  const courseId = this.$route.params.id;
  if (this.course) {
    return;
  }

  try {
    this.course = await getCourseById(courseId);
  } catch (error) {
    console.error('Error fetching course details:', error);
  }
},

  // mounted() {
  //   this.$store.dispatch('fetchCourses').then(() => {
  //   console.log("Courses in store:", this.allCourses); 
  // });
   
  // },
  watch: {
    allCourses(newCourses) {
      console.log("Courses updated:", newCourses); 
    },
  },
  // mounted() {
  //   this.getAllCourses();
  // },
};
</script>

<style scoped>
 .sidenav {
    margin: 0;
    border-right: 2px solid rgb(219, 213, 213);
  }
</style>
