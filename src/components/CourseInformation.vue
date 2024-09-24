<template>
  <div class="flex flex-col">
    <div class="mx-8 pt-4">
      <h3 class="mb-4">About the Course</h3>
      <div class="flex course-instructor-detail mb-8">
        
        <div class="course-instructor-image border-2 mr-4"
      :style="{ backgroundImage: `url(${course.instructor.profilePicture})` }"
        ></div>
        <div class="expertise-and-name">
          <h4 class="mb-2">{{ course.instructor.name }}</h4>
          <h5 class="text-expertise">{{ course.instructor.expertise }}</h5>
        </div>
      </div>
      <p class="about trucate-text">{{ course.about }}</p>
    </div>

    <hr class="border mt-8 mb-8 mx-0" />
    <div class="mx-8">
      <h3 class="mb-4">Course Completion</h3>

      <div class="completion-summary">
        <span>{{ completionPercentage }}% Completed</span>
        <span>{{ completedModules }}/{{ course.listOfModules.length }}</span>
      </div>
      <hr class="border mb-4" />

      <ul class="course-list">
        <li
          v-for="(module, index) in course.listOfModules"
          :key="index"
          class="course-item"
        >
          <div class="module-content">
            <span class="module-number">{{
              (index + 1).toString().padStart(2, "0")
            }}</span>
            <span
              class="module-name"
              :class="{
                'line-through': module.completed,
                none: !module.completed,
                'text-gray': module.completed,
                'text-black': !module.completed,
              }"
            >
              {{ module.name }}
            </span>
          </div>
          <span class="module-icon">
            <i
              :class="module.completed ? 'completed-icon' : 'incomplete-icon'"
            ></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseInformation",
  props: {
    course: Object,
  },
  computed: {
    completionPercentage() {
      if (!this.course || !this.course.listOfModules) return 0;
      const completed = this.course.listOfModules.filter(
        (module) => module.completed
      ).length;
      return ((completed / this.course.listOfModules.length) * 100).toFixed(0);
    },
    completedModules() {
      return this.course.listOfModules.filter((module) => module.completed)
        .length;
    },
  },
  mounted() {
    console.log("Received course:", this.course);
  },
  
};
</script>

<style scoped>
.course-instructor-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  /* border: 1px solid red; */
}
.course-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
 
}
.text-expertise {
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgb(169, 168, 168);
}

.module-content {
  display: flex;
  align-items: center;
  max-width: 80%;
}

.module-number {
  font-weight: 400;
  margin-right: 10px;
  color: gray;
}

.module-name {
  word-break: break-word;
  flex: 1;
}
.about{
  color: rgb(129, 129, 129);
  line-height: 1.4;
  font-family: 'Roboto',sans-serif;
}
.text-gray {
  color: rgb(169, 168, 168);
}

.text-black {
  color: black;
}

.module-icon {
  display: flex;
  align-items: center;
}

.completed-icon::before {
  content: "✔";
  color: green;
}

.incomplete-icon::before {
  content: "○";
  color: grey;
}

.completion-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: gray;
}
</style>
