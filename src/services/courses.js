import axios from "axios";
import store from "@/store";

export const getAllCourses = async () => {
    const url = `http://localhost:3000/courses`; 
    try {
        const response = await axios.get(url); 
        return response.data; 
    } catch (error) {
        console.error("Error fetching all courses:", error); 
        throw error; 
    }
};
export const getCourseById = (id) => {
    // Get the course from the Vuex store
    const course = store.getters.getCourseById(id);
    if (course) {
        return Promise.resolve(course); // Return a resolved promise with the course data
    } else {
        return Promise.reject(new Error(`Course with ID ${id} not found in store`));
    }
};

// export const getCourseById = async (id) => {
    
//     const url = `http://localhost:3000/courses/${id}`; 
//     try {
//         const response = await axios.get(url); 
//         return response.data;
//     } catch (error) {
//         console.error(`Error fetching course with ID ${id}:`, error); 
//         throw error; 
//     }
// };
