import axios from "axios";
import store from "@/store";


const BASE_URL = '/api/courses'; 

export const getAllCourses = async () => {
   
    // const url = `http://localhost:3000/courses`; 
    try {
        const response = await axios.get(BASE_URL); 
        return response.data.courses; 
    } catch (error) {
        console.error("Error fetching all courses:", error); 
        throw error; 
    }
};
export const getCourseById = (id) => {
    // Get the course from the Vuex store
    const course = store.getters.getCourseById(id);
    if (course) {
        return Promise.resolve(course); 
    } else {
        return Promise.reject(new Error(`Course with ID ${id} not found in store`));
    }
};

