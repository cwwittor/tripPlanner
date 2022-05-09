import { createRouter, createWebHistory } from "vue-router";
import ParkList from "../views/ParkList";
import ErrorDisplay from "../views/ErrorDisplay";

const routes = [
  {
    path: "/",
    name: "ParkList",
    component: ParkList,
  },
  {
    path: "/error/:error",
    name: "ErrorDisplay",
    props: true,
    component: ErrorDisplay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
