import { createStore } from "vuex";
import { getAllCourses } from "@/services/courses";


export default createStore({
  state: {
    courses: [],
    lastViewedCourse: 1,
  
  },
  getters: {
    allCourses: (state) => state.courses,
    
    // getCourseById: (state) => (id) => state.courses.find(course => course.id === id),
    lastViewedCourse(state) {
      return state.lastViewedCourse; 
    },

    getCourseById: (state) => (id) => {
      const course = state.courses.find(course => course.id === id);
      console.log("Looking for course ID:", id); // Check the ID being searched
      console.log("Course found:", course); // See if the course exists
      return course;
    }
    
  },
  mutations: {
    setLastViewedCourse(state, courseId) {
      state.lastViewedCourse = courseId;
    },
    
    SET_COURSES(state, courses) {
      console.log("Setting courses:", courses); 
      state.courses = courses;
    },
    
  },
  actions: {
    async fetchCourses({ commit }) {
      try {
        const courses = await getAllCourses();
        console.log("Fetched courses:", courses);
        commit('SET_COURSES', courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    },
    
  },
  modules: {
  
  },
});


