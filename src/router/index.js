import { createRouter, createWebHistory } from "vue-router";
import ParkList from "../views/ParkList";
import ErrorDisplay from "../views/ErrorDisplay";
//import EventDetails from "../views/EventDetails";

const routes = [
  {
    path: "/",
    name: "ParkList",
    component: ParkList,
  },
  /**{
    path: "/park/:id",
    name: "ParkDetails",
    props: true,
    component: EventDetails,
  },*/
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
