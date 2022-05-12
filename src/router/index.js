import { createRouter, createWebHistory } from "vue-router";
import ParkList from "../views/ParkList";
import ErrorDisplay from "../views/ErrorDisplay";
import ParkDetails from "../views/ParkDetails";
import ParkPlanner from "../views/ParkPlanner";

const routes = [
  {
    path: "/",
    name: "ParkList",
    component: ParkList,
  },
  {
    path: "/:id",
    name: "ParkListPage",
    component: ParkList,
  },
  {
    path: "/park/:id",
    name: "ParkDetails",
    props: true,
    component: ParkDetails,
  },
  {
    path: "/error/:error",
    name: "ErrorDisplay",
    props: true,
    component: ErrorDisplay,
  },
  {
    path: "/park/planner",
    name: "ParkPlanner",
    props: true,
    component: ParkPlanner,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
