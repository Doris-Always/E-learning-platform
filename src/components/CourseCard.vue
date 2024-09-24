
  <template>
    <v-card class="mx-2 my-4" elevation="2" @click="goToCourse(course.id)">
      <v-img 
        :src="course.coursePicture" 
        height="200px" 
        class="white--text" 
        :alt="course.name" 
        cover
      ></v-img>
  
      <v-card-title class="text-lg font-semibold">{{ course.name }}</v-card-title>
  
      <v-card-subtitle>
        <v-row>
          <v-col class="d-flex align-center">
            <span class="font-weight-bold">{{ course.category }}</span>
          </v-col>
        </v-row>
      </v-card-subtitle>
  
      <v-card-text>
        <div class="text-sm">
          Rating: {{ course.rating }}
          <v-icon class="yellow--text">mdi-star</v-icon>
          <span class="gray--text">({{ course.reviewCount }})</span>
        </div>
        <div class="text-sm">
       {{ course.instructor.name }} ({{ course.instructor.expertise }})
        </div>
        <!-- <div class="font-weight-bold mt-2">
          <span class="red--text line-through">₦{{ course.originalPrice }}</span>
          <span class="ml-2 green--text">₦{{ course.discountPrice }}</span>
        </div> -->
      </v-card-text>
    </v-card>
  </template>
  

  
  
  <script>
  export default {
    name: "CourseCard",
    props: {
      course: {
        type: Object,
        required: true,
      },
    },

    methods: {
    goToCourse(courseId) {
      this.$emit("navigate", courseId); 
      this.$emit("update-active-item", "Dashboard");
      this.$router.push({ name: 'CourseDetailView', params: { id: courseId } }); // Navigate to CourseDetailView
    },
  },
};
    // methods: {
    //   goToCourse(courseId) {
    //     this.$emit("navigate", courseId);
    //   },
    // },
  // };
  </script>
   
  
  <style scoped>
  
  </style>
  