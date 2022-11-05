import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

createApp(App).use(store).use(router).use(VueAwesomePaginate).mount('#app')
