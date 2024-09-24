import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CourseDetailView from "@/views/CourseDetailView.vue";
import ChartView from "@/views/ChartView.vue";
import UserProfile from "@/views/UserProfile.vue";
import UserSchedule from "@/views/UserSchedule.vue";
import NotificationView from "@/views/NotificationView.vue";
import SettingView from "@/views/SettingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/course/:id',
    name: 'CourseDetailView',
    component: CourseDetailView,
    props: true,
    
  },
  {
    path: "/chart",
    name: "ChartView",
    component: ChartView,
  },
  {
    path: "/user",
    name: "user",
    component: UserProfile,
  },
  {
    path: "/schedule",
    name: "schedule",
    component: UserSchedule,
  },
  {
    path: "/notification",
    name: "notification",
    component: NotificationView,
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
