import { createStore } from "vuex";
import { getAllCourses } from "@/services/courses";


export default createStore({
  state: {
    courses: [],
    lastViewedCourse: 1,
  
  },
  getters: {
    allCourses: (state) => state.courses,
    lastViewedCourse(state) {
      return state.lastViewedCourse; 
    },
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


