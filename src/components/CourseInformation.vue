<template>
  <div class="flex flex-col mx-2">
    <div class="">
      <h3 class="mb-4">About the Course</h3>
      <div class="flex course-instructor-detail mb-8">
        <div class="course-instructor-image mx-4">
          <img :src="require('../assets/profile-image.jpg')" alt="" />
        </div>
        <div class="expertise-and-name">
          <h4 class="mb-2">{{ course.instructor }}</h4>
          <h5 class="">PM Expert</h5>
        </div>
      </div>
      <p>{{ course.about }}</p>
    </div>

    <hr class="border mt-8 mb-8 mx-0" />

    <h3 class="mb-4">Course Completion</h3>

    <div class="completion-summary">
      <span>{{ completionPercentage }}% Completed</span>
      <span>{{ completedModules }}/{{ course.modules.length }}</span>
    </div>
    <hr class="border mb-4" />
    <ul class="course-list">
      <li
        v-for="(item, index) in course.modules"
        :key="index"
        class="course-item"
      >
        <div class="module-content">
          <span class="module-number">{{
            (index + 1).toString().padStart(2, "0")
          }}</span>
          <span class="module-name"  :class="{ 'line-through': item.completed, 'none': !item.completed, 'text-gray': item.completed,'text-black': !item.completed}" >{{ item.name }}</span>
        </div>
        <span class="module-icon">
          <i :class="item.completed ? 'completed-icon' : 'incomplete-icon'"></i>
        </span>
      </li>
    </ul>
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
      const completed = this.course.modules.filter(
        (module) => module.completed
      ).length;
      return ((completed / this.course.modules.length) * 100).toFixed(0);
    },
    completedModules() {
      return this.course.modules.filter((module) => module.completed).length;
    },
  },
};
</script>

<style scoped>
.course-instructor-detail {
}
.course-instructor-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid red;
}
.course-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  /* border-bottom: 1px solid #e0e0e0; */
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
.text-gray {
  color: grey; 
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
