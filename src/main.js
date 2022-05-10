//Co-authored-by: Andrew Sipes <ansipes@users.noreply.github.com>
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
//import store from "./stores";
import "./index.css";

createApp(App).use(createPinia()).use(router).mount("#app");
